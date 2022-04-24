import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <>
            <Container>
                <h2>Ypu Are About To Book: {service.name}</h2>
                <Button onClick={() => navigate("/checkout")}>Check Out</Button>
            </Container>
        </>
    );
};

export default ServiceDetail;