import NotFound404 from "@/components/common/NotFound404";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("not_found");
  const not_found = t("not_found");
  const go_home = t("go_home");

  return <NotFound404 labels={{ not_found, go_home }}/>;
}
