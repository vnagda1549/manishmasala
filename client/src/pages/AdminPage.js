import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Tabs, Tab } from "react-bootstrap";

import ProductUploadForm from "./ProductUploadForm"; // Adjust the path if needed

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Container className="mt-5">
          <h1 className="text-center mb-4">Admin Dashboard</h1>
          <Tabs defaultActiveKey="product" id="admin-tabs" className="mb-3">
            <Tab eventKey="product" title="Products">
              <div className="p-3">
                <ProductUploadForm />
              </div>
            </Tab>
            <Tab eventKey="testimonial" title="Testimonial">
              <div className="p-3">
                <h2>Add Testimonial</h2>
                <p>Form to add Testimonial will be here</p>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
