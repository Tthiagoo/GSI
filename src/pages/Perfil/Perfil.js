import React from "react";
import { Avatar, Layout, Input, Text } from "@ui-kitten/components";
import CamposInput from "../../components/CampoInp.js";
import styles from "./PerfilStyles";
import { LinearGradient } from "expo-linear-gradient";

export const Perfil = () => (
  <Layout style={styles.containerMain} level="1">
    <Layout style={styles.containerBody} level="1">
      <Layout style={styles.containerProfile}>
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require("../../../assets/jonny.jpg")}
        />
        <Text category="h4" style={styles.Text}>
          Mohamed Sali
        </Text>
        <Text style={styles.Text3}>RG:12.223.444-8 | CPF:45.667.778-4</Text>
      </Layout>

      <Layout style={styles.containerInfo} level="1">
       <Text style={styles.Text2}>CNS/SUS: AAKSKKS SKSKSKSKD KSKAKA DKSKSKS
           ss
           ssdssss
           ssdssss
       </Text>
       
      </Layout>
    </Layout>
  </Layout>
);

export default Perfil;
