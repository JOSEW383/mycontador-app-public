"use client";

import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/styles/Landing.module.css";
import {Link} from "@/lib/i18n/routing";
import { useTranslations } from "next-intl";

export default function Landing() {
  const t = useTranslations("home.landing");

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {t("title_1")}{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                {t("title_2")}
              </Text>{" "}
              {t("title_3")}
            </Title>

            <Text className={classes.description} mt={30}>
              {t("description")}
            </Text>

            <Link href="/app">
              <Button
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                {t("get_started")}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
