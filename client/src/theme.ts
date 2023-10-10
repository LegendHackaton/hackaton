import { type ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  components: {
    Menu: {
      itemSelectedBg: "#F0F6FF"
    },
    Pagination: {
      itemActiveBg: "#f9f9f9",
      colorPrimary: "#5c5967",
      colorPrimaryHover: "rgba(0, 0, 0, 0.88)",
      colorText: "#5c5967",
      fontWeightStrong: 400
    },
    Modal: {
      titleColor: "#223759"
    },
    Typography: {
      colorTextHeading: "#223759",
      titleMarginBottom: 0,
      fontWeightStrong: 500
    },
    Form: {
      labelColor: "#223759",
      fontWeightStrong: 400,
      fontSize: 14,
      itemMarginBottom: 20
    },
    Input: {
      fontSize: 14
    },
    Select: {
      fontSize: 14
    },
    DatePicker: {
      fontSize: 14
    }
  },
  token: {
    // colorBgLayout: "#F0F6FF",
    colorPrimary: "#3c70b1",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 1.3,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    lineHeightHeading3: 1.3,
    colorSuccessBg: "rgba(131, 194, 157, 0.2)",
    colorSuccessActive: "#21bd1e",
    colorBgMask: "#9e9e9e7a"
  }
};
