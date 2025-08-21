# Imcrypt

The project has been deployed on Render .<br>
You can visit the deployed website here - <u>https://ranjeetbaraik-imcrypt.onrender.com</u> <br>

## PREVIEW

https://user-images.githubusercontent.com/84462743/195802461-b48c9079-fa3f-49a8-862c-17a08f7e7b7c.mp4

## PROJECT OVERVIEW

**Imcrypt** is a full-stack web application that implements **image steganography** to hide secret text messages within PNG images. The application provides a secure way to store confidential information by embedding it directly into image pixels, making it invisible to the naked eye while maintaining the image's visual integrity.

### Key Features
- 🔐 **Secure Text Encoding**: Hide any text message inside a PNG image
- 🔍 **Message Decoding**: Extract hidden messages from encoded images
- 🚫 **No Server Storage**: Images are processed and immediately deleted for maximum security
- 🌐 **User-Friendly Interface**: Clean, responsive React-based UI
- ⚡ **Real-time Processing**: Fast encoding/decoding using optimized algorithms

## TECHNICAL IMPLEMENTATION

### Architecture Overview
The application follows a **client-server architecture** with the following components:

#### Frontend (React.js)
- **Single Page Application** built with React 18.2.0
- **React Router DOM** for navigation between encode/decode pages
- **Responsive Design** with custom CSS styling
- **File Upload Interface** for image handling
- **Real-time Feedback** for user interactions

#### Backend (Node.js + Express)
- **RESTful API** with Express.js framework
- **Multer Middleware** for handling multipart/form-data file uploads
- **CORS Support** for cross-origin requests
- **Child Process Integration** to execute Python scripts
- **Temporary File Management** with automatic cleanup

#### Image Processing (Python + OpenCV)
- **OpenCV** for image manipulation and pixel-level operations
- **Custom Steganography Algorithm** using mathematical patterns
- **Lossless Encoding** that preserves image quality
- **Efficient Decoding** with pattern-based extraction

### How It Works Technically

#### 1. **Encoding Process**
```
User uploads PNG image + secret message
    ↓
Multer saves file temporarily with unique filename
    ↓
Node.js spawns Python child process (encodeScript.py)
    ↓
Python script uses OpenCV to:
    • Load the image as numpy array
    • Calculate GCD-based pattern for pixel selection
    • Convert message characters to ASCII values
    • Embed ASCII values into blue channel (B) of selected pixels
    • Save modified image
    ↓
Server sends encoded image as download
    ↓
Temporary files are deleted after 3 seconds
```

#### 2. **Decoding Process**
```
User uploads encoded PNG image
    ↓
Server validates file type (PNG only)
    ↓
Python script extracts hidden message:
    • Uses same GCD pattern to locate embedded pixels
    • Reads blue channel values from selected pixels
    • Converts ASCII values back to characters
    • Reconstructs original message
    ↓
Server returns decoded message as JSON
    ↓
Temporary file is immediately deleted
```

#### 3. **Steganography Algorithm Details**
- **Pattern Generation**: Uses GCD (Greatest Common Divisor) of image dimensions to create a mathematical pattern
- **Pixel Selection**: Only specific pixels are modified based on the pattern `(i+1 * j+1) % pattern == 0`
- **Channel Modification**: Only the blue (B) channel of RGB pixels is modified to minimize visual impact
- **Message Termination**: Uses null character (0) to mark end of hidden message
- **Capacity**: Can hide messages up to the number of selected pixels in the image

### Security Features
- **No Server-Side Storage**: Images are processed in memory and deleted immediately
- **Unique Filenames**: Each upload gets a random 8-character identifier
- **File Type Validation**: Only PNG images are accepted (both client and server-side)
- **File Size Limits**: 5MB maximum file size to prevent abuse
- **Automatic Cleanup**: Temporary files are removed within 3 seconds

### API Endpoints
- `POST /api/encode` - Encode text message into image
- `POST /api/decode` - Decode hidden message from image

### File Structure
```
Imcrypt/
├── client/                 # React frontend
│   ├── src/components/     # UI components (Navbar, Encode, Decode, etc.)
│   └── public/            # Static assets
├── controllers/           # Business logic
│   ├── encodeController.js # Handles encoding requests
│   ├── decodeController.js # Handles decoding requests
│   ├── encodeScript.py    # Python encoding algorithm
│   └── decodeScript.py    # Python decoding algorithm
├── routes/               # API route definitions
├── middlewares/          # Multer file upload configuration
└── uploads/             # Temporary file storage
```

## TECHSTACK

- React.Js
- Node.js
- Javascript
- Python
- OpenCV
- Image Steganography
- Child Process
