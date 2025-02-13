import React, { useState } from "react";
import { Box, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TabAndAccordions = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Temporary data for tab content
  const tabContent = [
    {
      title: "Card Content for Tab 1",
      description: "This is the content inside the card for Tab 1. You can add more details here."
    },
    {
      title: "Card Content for Tab 2",
      description: "This is the content inside the card for Tab 2. You can add more details here."
    },
    {
      title: "Card Content for Tab 3",
      description: "This is the content inside the card for Tab 3. You can add more details here."
    }
  ];

  // Temporary data for accordion content
  const accordionContent = [
    {
      title: "Accordion 1",
      description: "This is the content of Accordion 1. It can be expanded or collapsed."
    },
    {
      title: "Accordion 2",
      description: "This is the content of Accordion 2. You can add more details here."
    },
    {
      title: "Accordion 3",
      description: "This is the content of Accordion 3. It works just like the others."
    }
  ];

  return (
    <Box sx={{ width: "100%",  flexDirection:"column", justifyContent:"center"  }}>
      {/* Tabs Section */}
      <Typography variant="h4" gutterBottom>
        Tabs Example
      </Typography>
      <Box sx={{ width: "100%" }}>
        {/* Card Container for Tabs and Content */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            {/* Tabs Section */}
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="Tabs Example" 
              sx={{ mb: 2, }}
            >
              <Tab label="Tab 1" />
              <Tab label="Tab 2" />
              <Tab label="Tab 3" />
            </Tabs>

            {/* Tab Content Section */}
            <CardContent>
              <Typography variant="h6">
                {tabContent[tabValue].title}
              </Typography>
              <Typography>
                {tabContent[tabValue].description}
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
      {/* Accordions Section */}
      <Box sx={{ display: "flex", alignItems:"center", textAlign:"center", flexDirection:"column", justifyContent:"center"}}>
      <Typography variant="h4" gutterBottom>
        Accordions Example
      </Typography>

      {accordionContent.map((accordion, index) => (
        <Accordion key={index} sx={{width:"500px", display: "flex", flexDirection:"column", justifyContent:"center"}} >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`} sx={{borderBottom:"1px solid #E0E0E0"}}>
            <Typography>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {accordion.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
        
      </Box>
        
    </Box>
  );
};

export default TabAndAccordions;
