import type { ThemeColors } from "@/constants/theme";
import type { DiagramId } from "@/types/learning";
import type { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Circle, Line, Rect, Text as SvgText } from "react-native-svg";

import { fontFamily, radius } from "@/constants/theme";
import { enterUp } from "@/lib/motion";
import { useLocalize } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

type DiagramProps = {
  colors: ThemeColors;
  label: (fr: string, en: string) => string;
};

function LanWanDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect x={20} y={40} width={110} height={80} rx={12} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={75} y={75} fill={colors.neutral.textPrimary} fontSize={12} fontWeight="600" textAnchor="middle">
        {label("LAN", "LAN")}
      </SvgText>
      <SvgText x={75} y={95} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("Maison / bureau", "Home / office")}
      </SvgText>
      <Line x1={130} y1={80} x2={190} y2={80} stroke={colors.primary.blue} strokeWidth={2} />
      <Circle cx={160} cy={80} r={10} fill={colors.primary.blue} />
      <Rect x={190} y={40} width={110} height={80} rx={12} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={2} />
      <SvgText x={245} y={75} fill={colors.neutral.textPrimary} fontSize={12} fontWeight="600" textAnchor="middle">
        {label("WAN", "WAN")}
      </SvgText>
      <SvgText x={245} y={95} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("Internet", "Internet")}
      </SvgText>
    </Svg>
  );
}

function OsiLayersDiagram({ colors, label }: DiagramProps) {
  const layers = [
    label("7 Application", "7 Application"),
    label("4 Transport", "4 Transport"),
    label("3 Réseau", "3 Network"),
    label("2 Liaison", "2 Data link"),
    label("1 Physique", "1 Physical"),
  ];
  return (
    <Svg width="100%" height={180} viewBox="0 0 320 180">
      {layers.map((name, i) => (
        <Rect
          key={name}
          x={40}
          y={16 + i * 30}
          width={240}
          height={26}
          rx={6}
          fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
          stroke={colors.primary.blue}
          strokeWidth={1}
        />
      ))}
      {layers.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={160}
          y={34 + i * 30}
          fill={colors.neutral.textPrimary}
          fontSize={11}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
    </Svg>
  );
}

function IpSubnetDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect x={30} y={30} width={260} height={40} rx={8} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={160} y={55} fill={colors.neutral.textPrimary} fontSize={13} fontWeight="600" textAnchor="middle">
        192.168.1.10/24
      </SvgText>
      <Rect x={30} y={90} width={120} height={36} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={90} y={113} fill={colors.neutral.textPrimary} fontSize={10} textAnchor="middle">
        {label("Réseau", "Network")}
      </SvgText>
      <Rect x={170} y={90} width={120} height={36} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={230} y={113} fill={colors.neutral.textPrimary} fontSize={10} textAnchor="middle">
        {label("Hôte", "Host")}
      </SvgText>
    </Svg>
  );
}

function DnsLookupDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect x={20} y={55} width={70} height={50} rx={10} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={55} y={85} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {label("Client", "Client")}
      </SvgText>
      <Line x1={90} y1={80} x2={140} y2={80} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={115} y={70} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        DNS?
      </SvgText>
      <Rect x={140} y={55} width={70} height={50} rx={10} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={2} />
      <SvgText x={175} y={85} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        DNS
      </SvgText>
      <Line x1={210} y1={80} x2={260} y2={80} stroke={colors.semantic.success} strokeWidth={2} />
      <SvgText x={235} y={70} fill={colors.semantic.success} fontSize={9} textAnchor="middle">
        IP
      </SvgText>
      <Rect x={260} y={55} width={40} height={50} rx={10} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={280} y={85} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        WWW
      </SvgText>
      <SvgText x={160} y={140} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("nom → adresse IP", "name → IP address")}
      </SvgText>
    </Svg>
  );
}

function HttpHttpsDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect x={20} y={40} width={130} height={70} rx={12} fill={colors.soft.blueBg} stroke={colors.semantic.error} strokeWidth={2} />
      <SvgText x={85} y={70} fill={colors.neutral.textPrimary} fontSize={12} fontWeight="600" textAnchor="middle">
        HTTP :80
      </SvgText>
      <SvgText x={85} y={90} fill={colors.semantic.error} fontSize={10} textAnchor="middle">
        {label("non chiffré", "unencrypted")}
      </SvgText>
      <Rect x={170} y={40} width={130} height={70} rx={12} fill={colors.soft.blueMuted} stroke={colors.semantic.success} strokeWidth={2} />
      <SvgText x={235} y={70} fill={colors.neutral.textPrimary} fontSize={12} fontWeight="600" textAnchor="middle">
        HTTPS :443
      </SvgText>
      <SvgText x={235} y={90} fill={colors.semantic.success} fontSize={10} textAnchor="middle">
        {label("TLS / sécurisé", "TLS / secure")}
      </SvgText>
    </Svg>
  );
}

function ClientServerDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect
        x={24}
        y={45}
        width={100}
        height={60}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={74}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Client", "Client")}
      </SvgText>
      <SvgText
        x={74}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("Navigateur", "Browser")}
      </SvgText>
      <Line
        x1={124}
        y1={75}
        x2={196}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={64}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        {label("requête", "request")}
      </SvgText>
      <SvgText
        x={160}
        y={98}
        fill={colors.semantic.success}
        fontSize={9}
        textAnchor="middle"
      >
        {label("réponse", "response")}
      </SvgText>
      <Rect
        x={196}
        y={45}
        width={100}
        height={60}
        rx={12}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={246}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Serveur", "Server")}
      </SvgText>
      <SvgText
        x={246}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("Ressource", "Resource")}
      </SvgText>
    </Svg>
  );
}

function TcpUdpDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect
        x={20}
        y={35}
        width={130}
        height={80}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={85}
        y={60}
        fill={colors.neutral.textPrimary}
        fontSize={13}
        fontWeight="600"
        textAnchor="middle"
      >
        TCP
      </SvgText>
      <SvgText
        x={85}
        y={80}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("fiable · ordonné", "reliable · ordered")}
      </SvgText>
      <SvgText
        x={85}
        y={98}
        fill={colors.primary.blue}
        fontSize={10}
        textAnchor="middle"
      >
        HTTP · SSH
      </SvgText>
      <Rect
        x={170}
        y={35}
        width={130}
        height={80}
        rx={12}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={235}
        y={60}
        fill={colors.neutral.textPrimary}
        fontSize={13}
        fontWeight="600"
        textAnchor="middle"
      >
        UDP
      </SvgText>
      <SvgText
        x={235}
        y={80}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("rapide · léger", "fast · lightweight")}
      </SvgText>
      <SvgText
        x={235}
        y={98}
        fill={colors.primary.blue}
        fontSize={10}
        textAnchor="middle"
      >
        DNS · vidéo
      </SvgText>
    </Svg>
  );
}

function NetworkDevicesDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      <Rect
        x={20}
        y={20}
        width={85}
        height={50}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={62}
        y={42}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        Switch
      </SvgText>
      <SvgText
        x={62}
        y={58}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        LAN
      </SvgText>
      <Rect
        x={117}
        y={20}
        width={85}
        height={50}
        rx={10}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={42}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Routeur", "Router")}
      </SvgText>
      <SvgText
        x={160}
        y={58}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        LAN ↔ WAN
      </SvgText>
      <Rect
        x={215}
        y={20}
        width={85}
        height={50}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={257}
        y={42}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        AP
      </SvgText>
      <SvgText
        x={257}
        y={58}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        Wi‑Fi
      </SvgText>
      <Line
        x1={62}
        y1={70}
        x2={62}
        y2={100}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={160}
        y1={70}
        x2={160}
        y2={100}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={257}
        y1={70}
        x2={257}
        y2={100}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={62}
        y1={100}
        x2={257}
        y2={100}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Circle cx={160} cy={100} r={8} fill={colors.primary.blue} />
      <Rect
        x={70}
        y={120}
        width={180}
        height={36}
        rx={8}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={1.5}
      />
      <SvgText
        x={160}
        y={143}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Topologie locale", "Local topology")}
      </SvgText>
    </Svg>
  );
}

function NatFirewallDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect
        x={16}
        y={40}
        width={80}
        height={70}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={56}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        LAN
      </SvgText>
      <SvgText
        x={56}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        192.168.x
      </SvgText>
      <Line
        x1={96}
        y1={75}
        x2={120}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={120}
        y={35}
        width={80}
        height={80}
        rx={10}
        fill={colors.soft.blueBg}
        stroke={colors.semantic.success}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={62}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        NAT
      </SvgText>
      <SvgText
        x={160}
        y={80}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        {label("Pare-feu", "Firewall")}
      </SvgText>
      <SvgText
        x={160}
        y={98}
        fill={colors.semantic.success}
        fontSize={9}
        textAnchor="middle"
      >
        {label("filtre", "filter")}
      </SvgText>
      <Line
        x1={200}
        y1={75}
        x2={224}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={224}
        y={40}
        width={80}
        height={70}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={264}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Internet", "Internet")}
      </SvgText>
      <SvgText
        x={264}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        {label("IP publique", "Public IP")}
      </SvgText>
    </Svg>
  );
}

const DIAGRAMS: Record<
  DiagramId,
  (props: DiagramProps) => ReactElement
> = {
  "lan-wan": LanWanDiagram,
  "osi-layers": OsiLayersDiagram,
  "ip-subnet": IpSubnetDiagram,
  "dns-lookup": DnsLookupDiagram,
  "http-https": HttpHttpsDiagram,
  "client-server": ClientServerDiagram,
  "tcp-udp": TcpUdpDiagram,
  "network-devices": NetworkDevicesDiagram,
  "nat-firewall": NatFirewallDiagram,
};

const TITLES: Record<DiagramId, { fr: string; en: string }> = {
  "lan-wan": { fr: "LAN vs WAN", en: "LAN vs WAN" },
  "osi-layers": { fr: "Couches OSI (simplifié)", en: "OSI layers (simplified)" },
  "ip-subnet": { fr: "Adresse IP et masque", en: "IP address and mask" },
  "dns-lookup": { fr: "Résolution DNS", en: "DNS resolution" },
  "http-https": { fr: "HTTP vs HTTPS", en: "HTTP vs HTTPS" },
  "client-server": { fr: "Client et serveur", en: "Client and server" },
  "tcp-udp": { fr: "TCP vs UDP", en: "TCP vs UDP" },
  "network-devices": {
    fr: "Équipements réseau",
    en: "Network devices",
  },
  "nat-firewall": { fr: "NAT et pare-feu", en: "NAT and firewall" },
};

type Props = { id: DiagramId };

export function LessonDiagram({ id }: Props) {
  const { colors } = useTheme();
  const L = useLocalize();
  const Comp = DIAGRAMS[id];
  const title = TITLES[id];

  return (
    <Animated.View
      entering={enterUp(0, 6)}
      style={[
        styles.frame,
        {
          backgroundColor: colors.neutral.surface,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <Text style={[styles.title, { color: colors.primary.blue }]}>
        {L(title)}
      </Text>
      <Comp
        colors={colors}
        label={(fr, en) => L({ fr, en })}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
    marginBottom: 8,
    textAlign: "center",
  },
});
