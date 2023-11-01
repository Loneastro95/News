import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function App() {
  const [news, setNews] = useState([]);

  

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3a86810d72ce4f71a51ce638087d468a"
    );
    const news = await response.json();
    console.log(news.articles);
    setNews(news.articles);
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/* <Image
         source={require("")}/> */}
        <Text style={styles.text}>TechCrunch</Text>
      </View>

        <ScrollView>
          {news.map((news) => (
            <Card sx={{ maxWidth: 345, marginTop: 2 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    N
                  </Avatar>
                }
                title={news.title}
                subheader={news.publishedAt}
              ></CardHeader>
              <CardActions>
                <Button size="small">Share</Button>
                <Button value={news.url} size="small">Read More</Button>
              </CardActions>
            </Card>
          ))}
        </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    backgroundColor: 'gray',
    width: "100%",
    height: '10%',
    justifyContent: "center",
    borderBottomEndRadius: 10,

  },
  text: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
