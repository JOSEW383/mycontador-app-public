"use client";

import { Container, Text, Button, Group, Title } from "@mantine/core";
import { IconBrandAmazon, IconBrandGooglePlay } from "@tabler/icons-react";
import classes from "@/styles/DownloadAppLanding.module.css";
import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function DownloadAppLanding() {
  const t = useTranslations("home.download_app_landing");

  return (
    <section id="app" className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <Group justify="space-between" gap="xl">
          <div className={classes.leftContainer}>
            <Title className={classes.title} order={2}>
              {t("get_app")}
            </Title>
            <Text className={classes.description} color="dimmed">
              {t("get_app_description")}
            </Text>

            <Group className={classes.controls}>
              <Button
                component="a"
                href="https://www.amazon.com/gp/product/B0CNNJNQ2Y"
                size="md"
                variant="default"
                className={[classes.control, classes.amazon].join(" ")}
                leftSection={<IconBrandAmazon size={30} />}
              >
                Amazon
              </Button>
              <Button
                component="a"
                href="https://play.google.com/store/apps/details?id=com.develtek.mycontador"
                size="md"
                variant="default"
                className={[classes.control, classes.google].join(" ")}
                leftSection={<IconBrandGooglePlay size={30} />}
              >
                Google Play
              </Button>
            </Group>
          </div>
          <div span="content" className="hidden-mobile">
            <Image
              alt="Phone"
              src="/Screenshots/Phone.png"
              width={100}
              height={250}
            />
          </div>
        </Group>
      </Container>
    </section>
  );
}
