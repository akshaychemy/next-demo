  "use client";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  Button,
} from "@mantine/core";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
} from "@mantine/core";
import classes from "./ArticleCard.module.css";
import { useEffect,useState } from "react";

async function getData() {

  
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const HomePage = async () => {
  const [clicked,setClicked] = useState(false)
 // const [data,setData] = useState({})

  const onclickButton=()=>{
    setClicked(!clicked)
  }
  const child = (
    <Skeleton height={350} radius="md" animate={false}>
      <h1>hello</h1>
    </Skeleton>
  );

  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };


  

  const data = await getData()
  console.log("data",data);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/users');

  //       if (!res.ok) {
  //         // Handle the error
  //         throw new Error('Failed to fetch data');
  //       }

  //       return res.json();
  //     } catch (error) {
  //       // Handle any other errors that might occur during the fetch
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   const fetchData = async () => {
  //     const data = await getData();
  //     console.log('data', data);
  //     setData(data)
  //   };

  //   fetchData();
  // }, []); 
  
  

  return (
    <Grid my="md" mx="md">
       {data?.map((item) => (
      <Grid.Col span={{ base: 12, xs: 3 }}>
        <Card withBorder radius="md" className={classes.card}>
          <Card.Section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Avatar
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.username}`}
              size={100}
              radius={500}
              mr="xs"
              style={{ height: "500" }}
            />
          </Card.Section>


          <Text
            className={classes.title}
            fw={500}
            component="a"
            {...linkProps}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            <div>
            {item.name}
            </div>
            {clicked &&
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style={{marginLeft:'2px'}}
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
            </div>}
          </Text>

          <Group justify="space-between" className={classes.footer}>
            <Center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-at"
              
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </svg>
              <Text inline style={{ marginLeft: "5px", opacity: "0.5" }}>
              {item.email}
              </Text>
            </Center>
            <Group gap={8} mr={0}></Group>
          </Group>

          <Group justify="space-between" className={classes.footer}>
            <Center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-phone-call"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                <path d="M15 7a2 2 0 0 1 2 2"></path>
                <path d="M15 3a6 6 0 0 1 6 6"></path>
              </svg>
              <Text inline style={{ marginLeft: "5px", opacity: "0.5" }}>
              {item.phone}
              </Text>
            </Center>
            <Group gap={8} mr={0}></Group>
          </Group>

          <Group justify="space-between" className={classes.footer}>
            <Center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-world"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
              <Text inline style={{ marginLeft: "5px", opacity: "0.5" }}>
              {item.website}
              </Text>
            </Center>
            <Group gap={8} mr={0}></Group>
          </Group>

          <Group
            gap={0}
            mr={0}
            justify="space-between"
            className={classes.footer}
            style={{ marginTop: "-10px" }}
          >
            <Button
              mt="xl"
              size="md"
              style={{ width: "140px", marginTop: "0px" }}
              onClick={()=>onclickButton()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-user-plus"
              >
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              </svg>
              <Text style={{ marginLeft: "2px", fontWeight: 600 }}>Follow</Text>
            </Button>
            <Button
              mt="xl"
              size="md"
              style={{ width: "140px", marginTop: "0px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-trash"
              >
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
              <Text style={{ marginLeft: "2px", fontWeight: 600 }}>Delete</Text>
            </Button>
          </Group>
        </Card>
      </Grid.Col>
        ))}  
    </Grid>
  );
}


export default HomePage;
