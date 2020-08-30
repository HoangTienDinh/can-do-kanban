import React from "react";
import Card from "@material-ui/core/CardActions";
import { CardContent, Typography } from "@material-ui/core";

// Each card will be a task, written with text (and images?)
// Has drag and drop functionality
const TaskCard = () => {
  return <div>
    <Card style={{border: '1px solid'}}>
      <CardContent>
        <Typography>
          task card
        </Typography>
      </CardContent>
    </Card>
  </div>;
};

export default TaskCard;
