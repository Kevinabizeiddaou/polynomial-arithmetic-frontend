# Polynomial Arithmetic Tool

A modern and interactive web application for performing polynomial arithmetic operations in \( GF(2^m) \). This tool is designed for mathematicians, students, and researchers working in cryptography, coding theory, and other fields that involve polynomial arithmetic.

## Features

1. **Perform Arithmetic Operations**:
   - Addition, Subtraction, Multiplication, Division.
   - Modulo Reduction.
   - Finding the Inverse.

2. **Modern and Responsive Design**:
   - Clean and professional layout.
   - Fully responsive for desktop and mobile devices.
   - Hover effects and animations for enhanced interactivity.

3. **Easy-to-Use Interface**:
   - Dropdown for selecting \( GF(2^m) \) parameters.
   - User-friendly input forms for polynomials.
   - Results displayed instantly after operations.

---

## Table of Contents

- [Installation](#installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Installation

To run the project locally:
1. Make sure you have Python 3.12.x installed on your machine.
2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/polynomial-arithmetic-tool.git

3. Navigate to the project folder:
   ```bash
   cd polynomial-arithmetic-tool

4. Run the frontend:
   ```bash
   python -m http.server 8001
   ```

## Usage
1. Home Page (index.html)

Overview:
- Introduces the tool with a clean hero section.
- Explains the key features with images and descriptions.

2. About Page (about.html)

Purpose:
- Explains what 𝐺𝐹(2^𝑚) is and why it’s useful.
- Provides educational information for users unfamiliar with the concept.
- Operations Page (operations.html)

## Steps to Use:
1. Select a value for m for 𝐺𝐹(2^𝑚) from the dropdown.
2. Enter one or two polynomials in the input fields based on the operation.
3. Click the appropriate operation button:
   Add, Subtract, Multiply, Divide: Perform basic arithmetic.

- Modulo Reduce: Perform modulo reduction.
- Find Inverse: Find the inverse of a polynomial.

The result will appear in the Result section below the buttons.

## Technologies Used
- HTML5: For the structure and layout of the pages.
- CSS3: For styling, responsiveness, and animations.
- JavaScript: For interactivity and handling operations dynamically.

Contributors
- [Rayan Fakhreddine](github.com/Rayan28461)
- [Kevin Abi Zeid Daou](github.com/Kevinabizeiddaou)
- [Ahmad El Jazaerli](github.com/ahmadeljazaerli)