import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import imageList from "../../assets/images/image 13.svg";
export default function TitlebarImageList() {
  return (
 
      <ImageListItem >
        <img src={`${imageList}`} alt={`navimg`} loading="lazy" />
        <ImageListItemBar
          title={`madina`}
          subtitle={``}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about `}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
  
  );
}
