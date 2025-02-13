import React from "react";
import { Box, Button, Typography, Stack, ButtonGroup } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Button Click Handlers
const handleClick = (text) => alert(`${text} Button Clicked!`);
const handleUpload = (event) => alert(`File Selected: ${event.target.files[0]?.name}`);

const ButtonExamples = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Buttons Examples
      </Typography>

      <Stack spacing={3}>
        {/* Default Button */}
        <Box>
          <Typography variant="h6">Default Button</Typography>
          <Button variant="contained" className="btn-default" onClick={() => handleClick("Default")}>
            Default
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained">Default</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Primary Button */}
        <Box>
          <Typography variant="h6">Primary Button</Typography>
          <Button variant="contained" color="primary" className="btn-primary" onClick={() => handleClick("Primary")}>
            Primary
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" color="primary">Primary</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Success Button */}
        <Box>
          <Typography variant="h6">Success Button</Typography>
          <Button variant="contained" color="success" className="btn-success" onClick={() => handleClick("Success")}>
            Success
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" color="success">Success</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Info Button */}
        <Box>
          <Typography variant="h6">Info Button</Typography>
          <Button variant="contained" color="info" className="btn-info" onClick={() => handleClick("Info")}>
            Info
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" color="info">Info</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Warning Button */}
        <Box>
          <Typography variant="h6">Warning Button</Typography>
          <Button variant="contained" color="warning" className="btn-warning" onClick={() => handleClick("Warning")}>
            Warning
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" color="warning">Warning</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Danger Button */}
        <Box>
          <Typography variant="h6">Danger Button</Typography>
          <Button variant="contained" color="error" className="btn-danger" onClick={() => handleClick("Danger")}>
            Danger
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" color="error">Danger</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Dark Button */}
        <Box>
          <Typography variant="h6">Dark Button</Typography>
          <Button variant="contained" sx={{ backgroundColor: "#333" }} className="btn-dark" onClick={() => handleClick("Dark")}>
            Dark
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" sx={{ backgroundColor: "#333" }}>Dark</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Link Button */}
        <Box>
          <Typography variant="h6">Link Button</Typography>
          <Button variant="text" className="btn-link" onClick={() => handleClick("Link")}>
            Link
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="text">Link</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Button Sizes */}
        <Box>
          <Typography variant="h6">Button Sizes</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" className="btn-lg" onClick={() => handleClick("Large")}>
              Large
            </Button>
            <Button variant="contained" size="medium" className="btn" onClick={() => handleClick("Normal")}>
              Normal
            </Button>
            <Button variant="contained" size="small" className="btn-sm" onClick={() => handleClick("Small")}>
              Small
            </Button>
          </Stack>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
<Button variant="contained" size="large">Large</Button>
<Button variant="contained" size="medium">Normal</Button>
<Button variant="contained" size="small">Small</Button>
          `}
          </SyntaxHighlighter>
        </Box>

        {/* Block Button */}
        <Box>
          <Typography variant="h6">Block Button</Typography>
          <Button variant="contained" fullWidth className="btn-block" onClick={() => handleClick("Block")}>
            Block Button
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" fullWidth>Block Button</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Button Group */}
        <Box>
          <Typography variant="h6">Button Group</Typography>
          <ButtonGroup variant="contained" className="btn-group">
            <Button onClick={() => handleClick("Left")}>Left</Button>
            <Button onClick={() => handleClick("Middle")}>Middle</Button>
            <Button onClick={() => handleClick("Right")}>Right</Button>
          </ButtonGroup>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
<ButtonGroup variant="contained">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>
          `}
          </SyntaxHighlighter>
        </Box>

        {/* Icon Button */}
        <Box>
          <Typography variant="h6">Icon Button</Typography>
          <Button variant="contained" startIcon={<i className="fas fa-star"></i>} className="btn-icon" onClick={() => handleClick("Icon")}>
            Icon Button
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" startIcon={<i className='fas fa-star'/>}>Icon Button</Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* Icon Only Button */}
        <Box>
          <Typography variant="h6">Icon Only Button</Typography>
          <Button variant="contained" sx={{ minWidth: "48px" }} className="btn-icon-only" onClick={() => handleClick("Icon Only")}>
            <i className="fas fa-heart"></i>
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`<Button variant="contained" sx={{ minWidth: '48px' }}><i className="fas fa-heart"></i></Button>`}
          </SyntaxHighlighter>
        </Box>

        {/* File Upload Button */}
        <Box>
          <Typography variant="h6">File Upload Button</Typography>
          <Button variant="contained" component="label" className="fileupload">
            Upload File
            <input type="file" hidden onChange={handleUpload} />
          </Button>
          <SyntaxHighlighter language="jsx" style={docco}>
            {`
<Button variant="contained" component="label">
  Upload File
  <input type="file" hidden />
</Button>
          `}
          </SyntaxHighlighter>
        </Box>
      </Stack>
    </Box>
  );
};

export default ButtonExamples;
