# Random Password Generator

![image](https://github.com/user-attachments/assets/4e95708a-9aba-45f0-b8c8-c19b8838ff7b)

A clean, responsive web application that generates secure random passwords with the option to copy them to clipboard.

## Features

- Generates 12-character secure passwords
- Includes uppercase, lowercase, and special characters
- One-click copy functionality
- Clean, modern UI with responsive design
- Visual feedback when copying passwords

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## How to Use

1. Click the "Generate Password" button
2. Your random password will appear in the text field
3. Click the copy icon to copy the password to your clipboard

## Installation

No installation required! Simply open `index.html` in any modern web browser.

## Customization

To modify password length or character sets, edit these variables in `script.js`:

```javascript
const length = 12; // Change password length
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Modify uppercase characters
const lowercase = 'abcdefghijklmnopqrstuvwxyz'; // Modify lowercase characters
const specialChars = '!@#$%^&*()_+-={}[]|\\:;"\'<>?,./~`©®'; // Modify special characters
