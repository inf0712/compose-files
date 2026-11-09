# 🐳 Docker Compose Playground

A collection of Docker Compose YAML files created while learning and experimenting with Docker Compose.

This repository contains practical examples of defining, configuring, and managing multi-container applications using Docker Compose. It serves as a personal learning space to explore container orchestration, networking, volumes, and service configurations.

## 📂 Repository Contents

Different Docker Compose configurations covering:

- Basic service configuration
- Running multiple containers
- Custom container names
- Port mapping
- Bind mounts
- Named volumes
- Custom bridge networks
- Environment variables
- Service dependencies
- Restart policies
- Custom image builds
- Multi-container applications

## 🛠️ Concepts Practiced

- **Services** – Defining and managing application services.
- **Images** – Using existing Docker images.
- **Build** – Building custom images using Dockerfiles.
- **Ports** – Mapping container ports to host ports.
- **Volumes** – Managing persistent data and bind mounts.
- **Networks** – Enabling communication between containers.
- **Environment** – Configuring services through environment variables.
- **Depends On** – Managing service startup dependencies.
- **Restart Policies** – Configuring container restart behavior.

## 🚀 Getting Started

Make sure Docker and the Docker Compose plugin are installed.

### Run a Compose file

```bash
docker compose -f level1-compose.yml up -d
```

### View running services

```bash
docker compose -f level1-compose.yml ps
```

### View logs

```bash
docker compose -f level1-compose.yml logs
```

### Stop and remove containers

```bash
docker compose -f level1-compose.yml down
```

### Rebuild images

```bash
docker compose -f level1-compose.yml up -d --build
```

## 📚 Learning Approach

The repository follows a hands-on learning approach, progressing from basic Compose configurations to more advanced implementations.

Each file represents an individual experiment or concept explored during my Docker Compose learning journey.

## 📈 Progress

Continuously learning, experimenting, troubleshooting, and improving my understanding of container orchestration.

---

**Author:** Infant Joseph

**Focus:** Docker Compose | Docker | Linux | DevOps


