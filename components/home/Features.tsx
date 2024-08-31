"use client";

import {
  Text,
  Container,
  ActionIcon,
  Title,
  SimpleGrid,
  DialogCssVariables,
} from "@mantine/core";
import React from "react";
import Image from "next/image";
import classes from "@/styles/Features.module.css";
import { useTranslations } from "next-intl";

const features = [
  {
    id: "businessman",
    image: "/features/businessman.svg",
  },
  {
    id: "survey",
    image: "/features/survey.svg",
  },
  {
    id: "advertising",
    image: "/features/advertising.svg",
  },
  {
    id: "conference_call",
    image: "/features/conference-call.svg",
  },
  {
    id: "bar_chart",
    image: "/features/bar-chart.svg",
  },
  {
    id: "multiple_devices",
    image: "/features/multiple-devices.svg",
  },
];

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  subTitle: React.ReactNode;
  description: React.ReactNode;
  data: FeatureImage[];
}

function getDataAndTranslations(t): FeatureImage[] {
  return features.map((feature) => {
    return {
      image: feature.image,
      title: t(feature.id+".title"),
      description: t(feature.id+".description")
    };
  });
}

export default function Features() {
  const t = useTranslations("home.features");
  const data = getDataAndTranslations(t);

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
          {t("subtitle")}
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            {t("description")}
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
