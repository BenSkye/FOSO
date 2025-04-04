# FOSO - Factory Operation System Optimization

A modern factory operation system optimization platform built with Next.js, React, and Ant Design.

## Features

- Real-time production monitoring
- Production planning and tracking
- Material inventory management
- Performance analytics and reporting
- Modern, responsive UI with dark mode support

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Ant Design
- Tailwind CSS
- React Query
- Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/foso.git
cd foso
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
yarn dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── .github/          # GitHub configuration files
├── .husky/           # Husky git hooks
├── .vscode/          # VS Code settings
├── public/           # Static files
├── src/
│   ├── app/         # Next.js app directory
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # React components
│   ├── configs/     # Configuration files
│   ├── constants/   # Constants and enums
│   ├── contexts/    # React contexts
│   ├── hooks/       # Custom React hooks
│   ├── libs/        # Third-party library configs
│   ├── services/    # API services
│   ├── styles/      # Global styles
│   ├── utils/       # Utility functions
│   ├── validations/ # Form validations
│   └── views/       # Page components
```

## Development

### Code Style

- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- Conventional commits

### Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
