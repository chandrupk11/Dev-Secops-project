# 🚀 Secure DevSecOps Pipeline with AWS

## 📌 Overview
This project demonstrates a secure CI/CD pipeline using AWS services.

## 🧱 Architecture
GitHub → CodePipeline → CodeBuild → Docker → ECR → Security Scan

## 🔐 Security Features
- AWS Secrets Manager for credentials
- IAM Least Privilege
- Private Docker Registry (ECR)
- Trivy Vulnerability Scanning

## 🛠️ Tools Used
- AWS CodePipeline
- AWS CodeBuild
- Amazon ECR
- Docker
- Trivy

## ▶️ How It Works
1. Developer pushes code to GitHub
2. CodePipeline triggers build
3. CodeBuild builds Docker image
4. Image pushed to ECR
5. Trivy scans image for vulnerabilities

## 📊 Output
- Secure Docker image stored in private registry
- Automated CI/CD pipeline