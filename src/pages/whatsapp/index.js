import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import WhatsAppLayout from "@/Components/layout/WhatsAppLayout";
import { Avatar, Card, CardActionArea, Grid, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import React from "react";
import { useRouter } from "next/router";
const chats = [
  {
    image: "https://placeimg.com/500/500/any",
    name: "Piyush Priyadarshi🙋",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti 💁🏻‍♀️",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti 💁🏻‍♀️",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti 💁🏻‍♀️",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti 💁🏻‍♀️",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti 💁🏻‍♀️",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti 💁🏻‍♀️",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Rahul Sharma",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Pallavi Bharti",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Piyush Priyadarshi 🙋",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Cacha",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
  {
    image: "",
    name: "Home Inspirations 😊",
    lastMessage: "ok",
    timestamp: "12:05",
    messageStatus: "delivered",
  },
];
function whatsapp() {
  const router = useRouter();
  return (
    <>
      {chats.map((chat, index) => {
        return (
          <Card key={index}>
            <CardActionArea
              onClick={() => {
                router.push("/whatsapp/chat/123");
              }}
            >
              <Grid container sx={{ p: 2 }}>
                <Grid item xs={2}>
                  <div>
                    <img
                      src={"https://placeimg.com/500/500/any"}
                      alt=""
                      height="49"
                      width="49"
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item sx={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: "450",
                          color: "black",
                        }}
                      >
                        {chat?.name}
                      </div>
                    </Grid>
                    <Grid item>{chat?.timestamp}</Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <DoneAllIcon htmlColor="blue" />
                      {chat?.lastMessage}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}

whatsapp.layout = WhatsAppLayout;

export default whatsapp;
