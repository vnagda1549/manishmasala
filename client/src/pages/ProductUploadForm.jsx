import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import imageCompression from "browser-image-compression";

const GET_PRODUCTS = gql`
  query GetProducts {
    productList {
      _id
      name
      image
      longDescription
      shortDescription
      quantities {
        size
        price
      }
    }
  }
`;

const ADD_PRODUCT = gql`
  mutation AddProduct($product: ProductInput!) {
    productAdd(product: $product) {
      _id
      name
      image
      longDescription
      shortDescription
      quantities {
        size
        price
      }
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $product: ProductInput!) {
    productUpdate(id: $id, product: $product) {
      _id
      name
      image
      longDescription
      shortDescription
      quantities {
        size
        price
      }
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    productDelete(id: $id) {
      _id
    }
  }
`;

const ProductUploadForm = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState([{ size: "", price: "" }]);
  const [editId, setEditId] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);
  const [imageBase64, setImageBase64] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
  });

  useEffect(() => {
    if (data && data.productList) {
      setProducts(data.productList);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products :(</p>;

  const handleAddSize = () => {
    setSizes([...sizes, { size: "", price: "" }]);
  };

  const handleRemoveSize = (index) => {
    setSizes(sizes.filter((_, i) => i !== index));
  };

  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    setSizes(
      sizes.map((size, i) => (i === index ? { ...size, [name]: value } : size))
    );
  };

  const handleEditProduct = (product) => {
    setEditId(product._id);
    setSizes(product.quantities);
    setFormData({
      productName: product.name,
      productDescription: product.longDescription,
    });
    setImageBase64(product.image);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct({ variables: { id } });
      refetch(); // Refetch products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1, // Adjust the maximum size as needed
        maxWidthOrHeight: 1024, // Adjust the maximum width/height as needed
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageBase64(reader.result);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing the image:", error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      name: formData.productName,
      image: imageBase64,
      longDescription: formData.productDescription,
      shortDescription: formData.productDescription,
      quantities: sizes.map((size) => ({
        size: size.size,
        price: parseFloat(size.price),
      })),
    };

    console.log("Submitting product:", newProduct);

    try {
      if (editId !== null) {
        console.log("Updating product with ID:", editId);
        await updateProduct({
          variables: { id: editId, product: newProduct },
        });
        setEditId(null);
      } else {
        console.log("Adding new product");
        await addProduct({ variables: { product: newProduct } });
      }
      setSubmissionError(null);
      refetch(); // Refetch products after adding/updating
    } catch (error) {
      console.error("Error submitting product:", error);
      setSubmissionError(
        error.message || "Failed to submit product. Please try again."
      );
    }

    event.target.reset();
    setSizes([{ size: "", price: "" }]);
    setImageBase64("");
    setFormData({
      productName: "",
      productDescription: "",
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-start">
        <Col md={12}>
          <div>
            <Table className="w-100" striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th className="w-50">Description</th>
                  <th>Sizes & Prices</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <tr key={product._id}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{product.longDescription}</td>
                      <td>
                        {product.quantities.map((size, i) => (
                          <div key={i}>
                            {size.size} - ${size.price}
                          </div>
                        ))}
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleEditProduct(product)}
                          className="me-2 mb-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No products found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>

          <div className="p-4 mb-5">
            <div>
              <h2 className="mb-4 text-center">
                {editId !== null ? "Edit Product" : "Upload Product"}
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="productName" className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    placeholder="Enter product name"
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData({ ...formData, productName: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group controlId="productImage" className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="productImage"
                    onChange={handleImageChange}
                  />
                </Form.Group>

                <Form.Group
                  controlId="productDescription"
                  className="mb-3 w-50"
                >
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="productDescription"
                    rows={3}
                    placeholder="Enter product description"
                    value={formData.productDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productDescription: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>

                <h4 className="mt-4">Product Sizes</h4>
                {sizes.map((size, index) => (
                  <Row key={index} className="align-items-center mb-3">
                    <Col>
                      <Form.Group controlId={`size-${index}`}>
                        <Form.Label>Size</Form.Label>
                        <Form.Control
                          type="text"
                          name="size"
                          value={size.size}
                          onChange={(event) => handleSizeChange(index, event)}
                          placeholder="Enter size"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId={`price-${index}`}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="number"
                          name="price"
                          value={size.price}
                          onChange={(event) => handleSizeChange(index, event)}
                          placeholder="Enter price"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="auto">
                      {sizes.length > 1 ? (
                        <Button
                          variant="danger"
                          onClick={() => handleRemoveSize(index)}
                          className="mt-3"
                        >
                          Remove
                        </Button>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                ))}
                <Button variant="success" onClick={handleAddSize}>
                  Add Size
                </Button>

                <Button
                  variant="warning"
                  type="submit"
                  className="d-block mt-4"
                >
                  {editId !== null ? "Update Product" : "Upload Product"}
                </Button>
                {submissionError && <p className="error">{submissionError}</p>}
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductUploadForm;
