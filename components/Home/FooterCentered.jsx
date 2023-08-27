"use client";

import { Anchor, Group, ActionIcon } from "@mantine/core";
import {
  IconBrandAmazon,
  IconBrandGooglePlay,
  IconNotebook,
} from "@tabler/icons-react";
import classes from "@/styles/FooterCentered.module.css";

const defaultLinks=[
  {
    link: "https://josew383.github.io/MyContador_PrivacyPolicy/",
    label: "Privacy Policy"
  }
];

export default function FooterCentered({ links }) {
  if(!links) links = defaultLinks;
  const items = links.map((link) => (
    <Anchor
      className={classes.anchor}
      key={link.label}
      href={link.link}
      // onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Anchor>
  ));

  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        MyContador © {year}
        <Group className={classes.links}>{items}</Group>
        <Group spacing="xs" position="right">
          <ActionIcon
            component="a"
            size="lg"
            variant="default"
            radius="xl"
            href="https://www.amazon.com/gp/product/B0BHKY16BC"
          >
            <IconBrandAmazon size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            size="lg"
            variant="default"
            radius="xl"
            href="https://play.google.com/store/apps/details?id=com.develtek.mycontador"
          >
            <IconBrandGooglePlay size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            size="lg"
            variant="default"
            radius="xl"
            href="/assets/user_manual_es.pdf"
          >
            <IconNotebook size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
