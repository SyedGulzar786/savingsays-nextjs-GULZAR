"use client"

import { useState } from "react";
import Link from "next/link";
import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";

export default function CategoryPage({categories}) {
      const [visibleCount, setVisibleCount] = useState(20);

  const loadMore = () => {
    setVisibleCount(prev => prev + 20);
  };

    return (
        // <Container>
        //     <Row>
        //         <Col>
        //             <ListGroup>
        //                 {categories.map(category => (
        //                     <ListGroup.Item key={category?.id} action href={`/categories/${category?.slug}`}>{category.name}</ListGroup.Item>
        //                 ))}
        //             </ListGroup>
        //         </Col>
        //     </Row>
        // </Container>
            <Container>
            <Row className="justify-content-center mt-5 mb-5">
              {categories.slice(0, visibleCount).map(category => (
                <Col md={3} key={category?.id} className="mb-3">
                  <ListGroup>
                    <ListGroup.Item action as={Link} href={`/categories/${category?.slug}`}>
                      {category.name}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              ))}
            </Row>
      
            {visibleCount < categories.length && (
              <div className="text-center mb-5">
                <Button className="btn bg-warning load-more btn-sm" variant="primary" onClick={loadMore}>
                  Load More...
                </Button>
              </div>
            )}
          </Container>
    )
}