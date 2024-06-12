import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Table,
} from "react-bootstrap";

const ProductUploadForm = () => {
  const [sizes, setSizes] = useState([{ size: "", price: "" }]);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddSize = () => {
    setSizes([...sizes, { size: "", price: "" }]);
  };

  const handleRemoveSize = (index) => {
    const newSizes = sizes.filter((_, i) => i !== index);
    setSizes(newSizes);
  };

  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    const newSizes = [...sizes];
    newSizes[index][name] = value;
    setSizes(newSizes);
  };

  const handleEditProduct = (index) => {
    const product = products[index];
    setEditIndex(index);
    setSizes(product.sizes);
    document.getElementById("productName").value = product.name;
    document.getElementById("productDescription").value = product.description;
  };

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newProduct = {
      name: form.productName.value,
      image: form.productImage.files[0] ? form.productImage.files[0].name : "",
      description: form.productDescription.value,
      sizes: sizes,
    };

    if (editIndex !== null) {
      const newProducts = [...products];
      newProducts[editIndex] = newProduct;
      setProducts(newProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }

    form.reset();
    setSizes([{ size: "", price: "" }]);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-start">
        <Col md={8}>
          <div className="p-4">
            <div>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Sizes & Prices</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.image}</td>
                      <td>{product.description}</td>
                      <td>
                        {product.sizes.map((size, i) => (
                          <div key={i}>
                            {size.size} - ${size.price}
                          </div>
                        ))}
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleEditProduct(index)}
                          className="me-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteProduct(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>

          <div className="p-4 mb-5">
            <div>
              <h2 className="mb-4 text-center">
                {editIndex !== null ? "Edit Product" : "Upload Product"}
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="productName" className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="productImage" className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Form.Group controlId="productDescription" className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter product description"
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

                <Button variant="warning" type="submit" className="w-100 mt-4">
                  {editIndex !== null ? "Update Product" : "Upload Product"}
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductUploadForm;
