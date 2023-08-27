"use client";

import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/styles/Landing.module.css";
import Link from "next/link";

export default function Landing() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Get{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                full control
              </Text>{" "}
              of your counter
            </Title>

            <Text className={classes.description} mt={30}>
              Manage you water usage by providing access to real-time
              information about water meters and consumption.
            </Text>

            <Link href="/app">
              <Button
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
