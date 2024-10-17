# Talan Board

Talan Board is an interactive task management application that helps you organize and prioritize your work using a Kanban-style board.

## Features

- Interactive task list with customizable columns: General Backlog, Month Tasks, Doing, and Done
- Task prioritization
- Ability to assign tasks to team members
- Animated "Talan Board" title with a gradient style using blue shades
- Responsive design for various screen sizes

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/talan-board.git
   cd talan-board
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to see the application.

## Usage

- Add new tasks using the input field at the top of the board
- Drag and drop tasks between columns to update their status
- Use the priority buttons to adjust task importance
- Assign tasks to team members using the input field in each task card

## Building for Production

To create a production build, run:

```
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.