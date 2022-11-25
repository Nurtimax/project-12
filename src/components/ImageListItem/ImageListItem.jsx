import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import imageList from "../../assets/images/image_13.svg";

export default function TitlebarImageList() {
  return (
    <ImageListItem>
      <img
        src={`${imageList}`}
        alt={`navimg`}
        loading="lazy"
        className="nav_image_list_item"
      />
      <ImageListItemBar
        title={`Nurtilek`}
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
