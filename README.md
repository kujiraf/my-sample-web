# Sample Web System

## Overview
This is a sample web system that allows authenticated users to create and publish blog posts. The system is built using the following technologies:
- Java (Spring Boot) for the backend
- React for the frontend
- Amazon Web Services (AWS) for hosting and infrastructure
- DynamoDB for database storage
- AWS Lambda for serverless processing
- Amazon API Gateway for the REST API
- AWS CloudFormation for infrastructure deployment
- Jenkins for continuous integration and delivery (CI/CD)
- Single sign-on (SSO) using AWS Cognito

## System Architecture
![architecture-diagram](https://user-images.githubusercontent.com/123456789/123456789/architecture-diagram.png)

The web system architecture is as follows:

- The frontend is a single-page application built with React.
- The backend is built with Java using the Spring Boot framework.
- The backend is deployed as a set of Docker containers in a Kubernetes cluster hosted on Amazon Elastic Kubernetes Service (EKS).
- User authentication and authorization are implemented using AWS Cognito.
- User profile data is stored in DynamoDB.
- Blog posts are stored in DynamoDB and are processed asynchronously using AWS Lambda functions triggered by DynamoDB Streams.
- The REST API is exposed through Amazon API Gateway.
- Infrastructure is provisioned and deployed using AWS CloudFormation.
- Continuous integration and delivery are handled using Jenkins.

## Prerequisites
- Java 11
- Node.js
- Docker
- Kubernetes
- Amazon Web Services account

## Setup
To set up the system, follow these steps:

1. Clone this repository.
2. Create an Amazon EKS cluster using the CloudFormation template provided in the `infrastructure` folder.
3. Deploy the backend to the EKS cluster using the Kubernetes deployment YAML files in the `backend/kubernetes` folder.
4. Create a DynamoDB table for user profile data.
5. Create a DynamoDB table for blog post data and set up a Lambda function to process the data.
6. Create a Cognito user pool and connect it to the REST API through API Gateway.
7. Deploy the frontend to a static website hosting service such as Amazon S3.

## Usage
1. Access the frontend URL.
2. Sign up for an account or log in.
3. Create a blog post.
4. View your blog post.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
