"use client";

import { Text, Container, ActionIcon, Title, SimpleGrid } from "@mantine/core";
import React from "react";
import Image from "next/image";
import classes from "@/styles/Features.module.css";

const featureDataDefault = [
  {
    image: '/features/businessman.svg',
    title: 'Efficient Counter Management',
    description: 'Enables administrators to quickly and easily add, edit, and delete water counters from different pools',
  },
  {
    image: '/features/survey.svg',
    title: 'Personalized Consumption Information',
    description: 'Users can access detailed information about their water consumption, as well as estimates for their next bill, helping them make informed decisions about their usage',
  },
  {
    image: '/features/advertising.svg',
    title: 'Notifications and Alerts',
    description: 'Users receive notifications and alerts for important events related to their counters, such as scheduled readings, abnormal consumption alerts, and status updates',
  },
  {
    image: '/features/conference-call.svg',
    title: 'Multi-User Access:',
    description: 'Allows multiple administrators to be assigned to each community, facilitating collaboration and access to counter information',
  },
  {
    image: '/features/bar-chart.svg',
    title: 'Real-Time Data Visualization',
    description: 'Users can access real-time data from their counters, including interactive charts and metrics that reflect their consumption and historical trends',
  },
  {
    image: '/features/multiple-devices.svg',
    title: 'Multi-Device Access',
    description: 'The application is accessible from both web and Android devices, allowing users to manage their water consumption anytime and anywhere',
  }
];

const supTitleDefault="Smart Counter Management";
const descriptionDefault="Facilitate the task of the reviewer when managing all the counters and allows the users to have an estimate of their next invoice before receiving it in addition to seeing the data from your accountant."

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode;
  description: React.ReactNode;
  data: FeatureImage[];
}

export default function Features({
  supTitle,
  description,
  data,
}: FeaturesImagesProps) {

if(!data){
  supTitle = supTitleDefault;
  description = descriptionDefault;
  data = featureDataDefault;
}
  
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ActionIcon
        variant="light"
        className={classes.itemIcon}
        size={70}
        radius="md"
      >
        <Image src={item.image} alt={""} width={50} height={50} />
      </ActionIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <section id="features">
        <Title className={classes.title} order={2}>
          {supTitle}
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            {description}
          </Text>
        </Container>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={"xl"}
          verticalSpacing={"xl"}
          style={{ marginTop: 30 }}
          // breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        >
          {items}
        </SimpleGrid>
      </section>
    </Container>
  );
}
