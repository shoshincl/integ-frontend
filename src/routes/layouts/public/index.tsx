import { FC } from "react";
import { Outlet } from "react-router";

import Navbar from "./navbar";
import { Helmet as HelmetReact } from "../../../ui/components/utils";

interface Content {
  name: string;
  content: string;
}

interface Helmet {
  title: string;
  meta: Content;
}

interface Props {
  helmet: Helmet;
}

const Public: FC<Props> = ({ helmet }) => (
  <>
    <HelmetReact {...helmet} />
    <Navbar />
    <Outlet />
  </>
);

export default Public;
