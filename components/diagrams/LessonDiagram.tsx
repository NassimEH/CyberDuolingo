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

function RequestLifecycleDiagram({ colors, label }: DiagramProps) {
  const steps = [
    label("DNS", "DNS"),
    label("TCP", "TCP"),
    "HTTP",
    label("Réponse", "Response"),
  ];
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect
        x={16}
        y={50}
        width={60}
        height={50}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={46}
        y={80}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Client", "Client")}
      </SvgText>
      {steps.map((name, i) => {
        const x = 90 + i * 55;
        return (
          <Rect
            key={name}
            x={x}
            y={55}
            width={48}
            height={40}
            rx={8}
            fill={i % 2 === 0 ? colors.soft.blueBg : colors.soft.blueMuted}
            stroke={colors.soft.blueBorder}
            strokeWidth={1.5}
          />
        );
      })}
      {steps.map((name, i) => {
        const x = 114 + i * 55;
        return (
          <SvgText
            key={`t-${name}`}
            x={x}
            y={80}
            fill={colors.neutral.textPrimary}
            fontSize={9}
            fontWeight="600"
            textAnchor="middle"
          >
            {name}
          </SvgText>
        );
      })}
      <Line
        x1={76}
        y1={75}
        x2={90}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={130}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("cycle d'une requête", "request lifecycle")}
      </SvgText>
    </Svg>
  );
}

function RestApiDiagram({ colors, label }: DiagramProps) {
  const methods = [
    { name: "GET", hint: label("lire", "read") },
    { name: "POST", hint: label("créer", "create") },
    { name: "PUT", hint: label("modifier", "update") },
    { name: "DELETE", hint: label("supprimer", "delete") },
  ];
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      {methods.map((m, i) => {
        const x = 18 + (i % 2) * 152;
        const y = 20 + Math.floor(i / 2) * 70;
        return (
          <Rect
            key={m.name}
            x={x}
            y={y}
            width={132}
            height={55}
            rx={10}
            fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
            stroke={colors.primary.blue}
            strokeWidth={2}
          />
        );
      })}
      {methods.map((m, i) => {
        const x = 84 + (i % 2) * 152;
        const y = 42 + Math.floor(i / 2) * 70;
        return (
          <SvgText
            key={`n-${m.name}`}
            x={x}
            y={y}
            fill={colors.neutral.textPrimary}
            fontSize={13}
            fontWeight="600"
            textAnchor="middle"
          >
            {m.name}
          </SvgText>
        );
      })}
      {methods.map((m, i) => {
        const x = 84 + (i % 2) * 152;
        const y = 60 + Math.floor(i / 2) * 70;
        return (
          <SvgText
            key={`h-${m.name}`}
            x={x}
            y={y}
            fill={colors.neutral.textSecondary}
            fontSize={10}
            textAnchor="middle"
          >
            {m.hint}
          </SvgText>
        );
      })}
    </Svg>
  );
}

function JwtFlowDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      <Rect
        x={20}
        y={20}
        width={80}
        height={45}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={60}
        y={47}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Login", "Login")}
      </SvgText>
      <Line
        x1={100}
        y1={42}
        x2={130}
        y2={42}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={130}
        y={20}
        width={80}
        height={45}
        rx={10}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={170}
        y={47}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        JWT
      </SvgText>
      <Line
        x1={210}
        y1={42}
        x2={240}
        y2={42}
        stroke={colors.semantic.success}
        strokeWidth={2}
      />
      <Rect
        x={240}
        y={20}
        width={60}
        height={45}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.semantic.success}
        strokeWidth={2}
      />
      <SvgText
        x={270}
        y={47}
        fill={colors.neutral.textPrimary}
        fontSize={10}
        fontWeight="600"
        textAnchor="middle"
      >
        API
      </SvgText>
      <Line
        x1={60}
        y1={65}
        x2={60}
        y2={100}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={60}
        y1={100}
        x2={270}
        y2={100}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={270}
        y1={100}
        x2={270}
        y2={65}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={90}
        y={115}
        width={140}
        height={36}
        rx={8}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={1.5}
      />
      <SvgText
        x={160}
        y={138}
        fill={colors.neutral.textPrimary}
        fontSize={10}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Bearer token", "Bearer token")}
      </SvgText>
    </Svg>
  );
}

function CorsDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect
        x={16}
        y={40}
        width={90}
        height={70}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={61}
        y={70}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Navigateur", "Browser")}
      </SvgText>
      <SvgText
        x={61}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        a.com
      </SvgText>
      <Rect
        x={125}
        y={50}
        width={70}
        height={50}
        rx={10}
        fill={colors.soft.blueBg}
        stroke={colors.semantic.success}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        CORS
      </SvgText>
      <SvgText
        x={160}
        y={88}
        fill={colors.semantic.success}
        fontSize={9}
        textAnchor="middle"
      >
        {label("autorise ?", "allow?")}
      </SvgText>
      <Rect
        x={214}
        y={40}
        width={90}
        height={70}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={259}
        y={70}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("API", "API")}
      </SvgText>
      <SvgText
        x={259}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        b.com
      </SvgText>
      <Line
        x1={106}
        y1={75}
        x2={125}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={195}
        y1={75}
        x2={214}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={140}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("origine croisée", "cross-origin")}
      </SvgText>
    </Svg>
  );
}

function GitBranchDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Line
        x1={40}
        y1={110}
        x2={280}
        y2={110}
        stroke={colors.primary.blue}
        strokeWidth={3}
      />
      <Circle cx={70} cy={110} r={8} fill={colors.primary.blue} />
      <Circle cx={140} cy={110} r={8} fill={colors.primary.blue} />
      <Circle cx={210} cy={110} r={8} fill={colors.primary.blue} />
      <Circle cx={270} cy={110} r={8} fill={colors.semantic.success} />
      <Line
        x1={140}
        y1={110}
        x2={140}
        y2={50}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <Line
        x1={140}
        y1={50}
        x2={210}
        y2={50}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <Line
        x1={210}
        y1={50}
        x2={210}
        y2={110}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <Circle cx={175} cy={50} r={7} fill={colors.soft.blueBorder} />
      <SvgText
        x={160}
        y={140}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        main
      </SvgText>
      <SvgText
        x={175}
        y={32}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("feature", "feature")}
      </SvgText>
    </Svg>
  );
}

function CiCdDiagram({ colors, label }: DiagramProps) {
  const steps = [
    label("Code", "Code"),
    label("Build", "Build"),
    label("Test", "Test"),
    label("Deploy", "Deploy"),
  ];
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      {steps.map((name, i) => (
        <Rect
          key={name}
          x={16 + i * 76}
          y={45}
          width={68}
          height={50}
          rx={10}
          fill={i === 3 ? colors.soft.blueMuted : colors.soft.blueBg}
          stroke={i === 3 ? colors.semantic.success : colors.primary.blue}
          strokeWidth={2}
        />
      ))}
      {steps.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={50 + i * 76}
          y={75}
          fill={colors.neutral.textPrimary}
          fontSize={11}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
      {[0, 1, 2].map((i) => (
        <Line
          key={`l-${i}`}
          x1={84 + i * 76}
          y1={70}
          x2={92 + i * 76}
          y2={70}
          stroke={colors.primary.blue}
          strokeWidth={2}
        />
      ))}
      <SvgText
        x={160}
        y={125}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        CI / CD
      </SvgText>
    </Svg>
  );
}

function SolidOverviewDiagram({ colors, label }: DiagramProps) {
  const letters = [
    { letter: "S", hint: label("Unique", "Single") },
    { letter: "O", hint: label("Ouvert", "Open") },
    { letter: "L", hint: "Liskov" },
    { letter: "I", hint: label("Interface", "Interface") },
    { letter: "D", hint: label("Dépendance", "Dependency") },
  ];
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      {letters.map((item, i) => (
        <Rect
          key={item.letter}
          x={14 + i * 62}
          y={35}
          width={54}
          height={80}
          rx={10}
          fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
          stroke={colors.primary.blue}
          strokeWidth={2}
        />
      ))}
      {letters.map((item, i) => (
        <SvgText
          key={`l-${item.letter}`}
          x={41 + i * 62}
          y={70}
          fill={colors.primary.blue}
          fontSize={18}
          fontWeight="700"
          textAnchor="middle"
        >
          {item.letter}
        </SvgText>
      ))}
      {letters.map((item, i) => (
        <SvgText
          key={`h-${item.letter}`}
          x={41 + i * 62}
          y={95}
          fill={colors.neutral.textSecondary}
          fontSize={8}
          textAnchor="middle"
        >
          {item.hint}
        </SvgText>
      ))}
    </Svg>
  );
}

function ClientServerWebDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect
        x={16}
        y={45}
        width={85}
        height={60}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={58}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Navigateur", "Browser")}
      </SvgText>
      <SvgText
        x={58}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        HTML / JS
      </SvgText>
      <Line
        x1={101}
        y1={75}
        x2={125}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={125}
        y={45}
        width={85}
        height={60}
        rx={12}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={167}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Serveur", "Server")}
      </SvgText>
      <SvgText
        x={167}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        Web
      </SvgText>
      <Line
        x1={210}
        y1={75}
        x2={234}
        y2={75}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={234}
        y={45}
        width={70}
        height={60}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={269}
        y={72}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        DB
      </SvgText>
      <SvgText
        x={269}
        y={90}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        SQL
      </SvgText>
      <SvgText
        x={160}
        y={135}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("architecture web", "web architecture")}
      </SvgText>
    </Svg>
  );
}

function DomTreeDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={180} viewBox="0 0 320 180">
      <Rect
        x={120}
        y={12}
        width={80}
        height={32}
        rx={8}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={33}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        html
      </SvgText>
      <Line
        x1={160}
        y1={44}
        x2={160}
        y2={60}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={120}
        y={60}
        width={80}
        height={32}
        rx={8}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={81}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        body
      </SvgText>
      <Line
        x1={160}
        y1={92}
        x2={160}
        y2={108}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={80}
        y1={108}
        x2={240}
        y2={108}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={80}
        y1={108}
        x2={80}
        y2={120}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={160}
        y1={108}
        x2={160}
        y2={120}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={240}
        y1={108}
        x2={240}
        y2={120}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={45}
        y={120}
        width={70}
        height={32}
        rx={8}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={1.5}
      />
      <SvgText
        x={80}
        y={141}
        fill={colors.neutral.textPrimary}
        fontSize={10}
        fontWeight="600"
        textAnchor="middle"
      >
        header
      </SvgText>
      <Rect
        x={125}
        y={120}
        width={70}
        height={32}
        rx={8}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={1.5}
      />
      <SvgText
        x={160}
        y={141}
        fill={colors.neutral.textPrimary}
        fontSize={10}
        fontWeight="600"
        textAnchor="middle"
      >
        main
      </SvgText>
      <Rect
        x={205}
        y={120}
        width={70}
        height={32}
        rx={8}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={1.5}
      />
      <SvgText
        x={240}
        y={141}
        fill={colors.neutral.textPrimary}
        fontSize={10}
        fontWeight="600"
        textAnchor="middle"
      >
        footer
      </SvgText>
      <SvgText
        x={160}
        y={172}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("arbre DOM", "DOM tree")}
      </SvgText>
    </Svg>
  );
}

function DockerLayersDiagram({ colors, label }: DiagramProps) {
  const layers = [
    label("App", "App"),
    label("Dépendances", "Dependencies"),
    label("OS / Base", "OS / Base"),
  ];
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      {layers.map((name, i) => (
        <Rect
          key={name}
          x={50}
          y={25 + i * 40}
          width={220}
          height={34}
          rx={8}
          fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
          stroke={colors.primary.blue}
          strokeWidth={2}
        />
      ))}
      {layers.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={160}
          y={47 + i * 40}
          fill={colors.neutral.textPrimary}
          fontSize={12}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
      <SvgText
        x={160}
        y={155}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("couches image", "image layers")}
      </SvgText>
    </Svg>
  );
}

function MvcArchitectureDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      <Rect
        x={110}
        y={12}
        width={100}
        height={40}
        rx={10}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={37}
        fill={colors.neutral.textPrimary}
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Contrôleur", "Controller")}
      </SvgText>
      <Line
        x1={110}
        y1={52}
        x2={70}
        y2={85}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Line
        x1={210}
        y1={52}
        x2={250}
        y2={85}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <Rect
        x={20}
        y={90}
        width={100}
        height={45}
        rx={10}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={70}
        y={110}
        fill={colors.neutral.textPrimary}
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Vue", "View")}
      </SvgText>
      <SvgText
        x={70}
        y={126}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        UI
      </SvgText>
      <Rect
        x={200}
        y={90}
        width={100}
        height={45}
        rx={10}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={250}
        y={110}
        fill={colors.neutral.textPrimary}
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >
        Model
      </SvgText>
      <SvgText
        x={250}
        y={126}
        fill={colors.neutral.textSecondary}
        fontSize={9}
        textAnchor="middle"
      >
        {label("données", "data")}
      </SvgText>
      <Line
        x1={120}
        y1={112}
        x2={200}
        y2={112}
        stroke={colors.semantic.success}
        strokeWidth={1.5}
      />
      <SvgText
        x={160}
        y={155}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        MVC
      </SvgText>
    </Svg>
  );
}

function TestPyramidDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={180} viewBox="0 0 320 180">
      <Rect
        x={110}
        y={20}
        width={100}
        height={36}
        rx={6}
        fill={colors.soft.blueBg}
        stroke={colors.soft.blueBorder}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={43}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        E2E
      </SvgText>
      <Rect
        x={75}
        y={64}
        width={170}
        height={36}
        rx={6}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={87}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Intégration", "Integration")}
      </SvgText>
      <Rect
        x={40}
        y={108}
        width={240}
        height={36}
        rx={6}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={160}
        y={131}
        fill={colors.neutral.textPrimary}
        fontSize={11}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Unitaires", "Unit")}
      </SvgText>
      <SvgText
        x={160}
        y={165}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("pyramide de tests", "test pyramid")}
      </SvgText>
    </Svg>
  );
}

function EncapsulationDiagram({ colors, label }: DiagramProps) {
  const layers = [
    { name: "HTTP", w: 100 },
    { name: "TCP", w: 140 },
    { name: "IP", w: 180 },
    { name: label("Trame", "Frame"), w: 220 },
  ];
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      {layers.map((layer, i) => {
        const x = 160 - layer.w / 2;
        const y = 20 + i * 32;
        return (
          <Rect
            key={layer.name}
            x={x}
            y={y}
            width={layer.w}
            height={28}
            rx={8}
            fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
            stroke={colors.primary.blue}
            strokeWidth={1.5}
          />
        );
      })}
      {layers.map((layer, i) => (
        <SvgText
          key={`t-${layer.name}`}
          x={160}
          y={39 + i * 32}
          fill={colors.neutral.textPrimary}
          fontSize={11}
          fontWeight="600"
          textAnchor="middle"
        >
          {layer.name}
        </SvgText>
      ))}
      <SvgText
        x={160}
        y={160}
        fill={colors.neutral.textSecondary}
        fontSize={10}
        textAnchor="middle"
      >
        {label("enveloppes imbriquées", "nested envelopes")}
      </SvgText>
    </Svg>
  );
}

function PortsMapDiagram({ colors, label }: DiagramProps) {
  const ports = [
    { port: "22", name: "SSH" },
    { port: "53", name: "DNS" },
    { port: "80", name: "HTTP" },
    { port: "443", name: "HTTPS" },
  ];
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect
        x={20}
        y={30}
        width={90}
        height={100}
        rx={12}
        fill={colors.soft.blueMuted}
        stroke={colors.primary.blue}
        strokeWidth={2}
      />
      <SvgText
        x={65}
        y={85}
        fill={colors.neutral.textPrimary}
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >
        {label("Machine", "Host")}
      </SvgText>
      {ports.map((p, i) => {
        const y = 28 + i * 28;
        return (
          <Rect
            key={p.port}
            x={140}
            y={y}
            width={160}
            height={24}
            rx={8}
            fill={colors.soft.blueBg}
            stroke={colors.soft.blueBorder}
            strokeWidth={1.5}
          />
        );
      })}
      {ports.map((p, i) => {
        const y = 45 + i * 28;
        return (
          <SvgText
            key={`t-${p.port}`}
            x={220}
            y={y}
            fill={colors.neutral.textPrimary}
            fontSize={11}
            fontWeight="600"
            textAnchor="middle"
          >
            {`:${p.port}  ${p.name}`}
          </SvgText>
        );
      })}
      <Line x1={110} y1={80} x2={140} y2={80} stroke={colors.primary.blue} strokeWidth={2} />
    </Svg>
  );
}

function DnsHierarchyDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      <Circle cx={160} cy={28} r={16} fill={colors.primary.blue} />
      <SvgText x={160} y={33} fill="#fff" fontSize={12} fontWeight="700" textAnchor="middle">
        .
      </SvgText>
      <Line x1={160} y1={44} x2={160} y2={62} stroke={colors.primary.blue} strokeWidth={2} />
      <Rect x={110} y={62} width={100} height={28} rx={8} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={1.5} />
      <SvgText x={160} y={81} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        .com
      </SvgText>
      <Line x1={160} y1={90} x2={160} y2={108} stroke={colors.primary.blue} strokeWidth={2} />
      <Rect x={95} y={108} width={130} height={28} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={160} y={127} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        example.com
      </SvgText>
      <Line x1={120} y1={136} x2={90} y2={152} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <Line x1={200} y1={136} x2={230} y2={152} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={70} y={162} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        www
      </SvgText>
      <SvgText x={250} y={162} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        api
      </SvgText>
      <SvgText x={160} y={18} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        {label("racine", "root")}
      </SvgText>
    </Svg>
  );
}

function SdlcCycleDiagram({ colors, label }: DiagramProps) {
  const steps = [
    label("Plan", "Plan"),
    label("Code", "Code"),
    label("Test", "Test"),
    label("Déployer", "Deploy"),
  ];
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      {steps.map((name, i) => {
        const x = 18 + i * 76;
        return (
          <Rect
            key={name}
            x={x}
            y={50}
            width={68}
            height={44}
            rx={10}
            fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
            stroke={colors.primary.blue}
            strokeWidth={1.5}
          />
        );
      })}
      {steps.map((name, i) => {
        const x = 52 + i * 76;
        return (
          <SvgText
            key={`t-${name}`}
            x={x}
            y={77}
            fill={colors.neutral.textPrimary}
            fontSize={11}
            fontWeight="600"
            textAnchor="middle"
          >
            {name}
          </SvgText>
        );
      })}
      {[0, 1, 2].map((i) => (
        <Line
          key={`a-${i}`}
          x1={86 + i * 76}
          y1={72}
          x2={94 + i * 76}
          y2={72}
          stroke={colors.primary.blue}
          strokeWidth={2}
        />
      ))}
      <SvgText x={160} y={130} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("cycle de vie logiciel", "software lifecycle")}
      </SvgText>
    </Svg>
  );
}

function AlgoSearchDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <SvgText x={80} y={24} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {label("Linéaire", "Linear")}
      </SvgText>
      {[0, 1, 2, 3, 4].map((i) => (
        <Rect
          key={`l-${i}`}
          x={20 + i * 24}
          y={36}
          width={20}
          height={28}
          rx={4}
          fill={i === 3 ? colors.semantic.success : colors.soft.blueMuted}
          stroke={colors.primary.blue}
          strokeWidth={1}
        />
      ))}
      <SvgText x={80} y={84} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        {label("1 → 2 → 3 → …", "1 → 2 → 3 → …")}
      </SvgText>
      <SvgText x={240} y={24} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {label("Dichotomique", "Binary")}
      </SvgText>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Rect
          key={`b-${i}`}
          x={168 + i * 18}
          y={36}
          width={16}
          height={28}
          rx={3}
          fill={i === 3 ? colors.semantic.success : i < 2 || i > 4 ? colors.soft.blueBg : colors.soft.blueMuted}
          stroke={colors.soft.blueBorder}
          strokeWidth={1}
        />
      ))}
      <SvgText x={240} y={84} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        {label("milieu → moitié", "mid → half")}
      </SvgText>
      <Rect x={40} y={105} width={240} height={36} rx={10} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={160} y={128} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        O(n)  vs  O(log n)
      </SvgText>
    </Svg>
  );
}

function StackQueueDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <SvgText x={80} y={22} fill={colors.neutral.textPrimary} fontSize={12} fontWeight="600" textAnchor="middle">
        {label("Pile", "Stack")}
      </SvgText>
      {[0, 1, 2].map((i) => (
        <Rect
          key={`s-${i}`}
          x={40}
          y={110 - i * 28}
          width={80}
          height={24}
          rx={6}
          fill={colors.soft.blueMuted}
          stroke={colors.primary.blue}
          strokeWidth={1.5}
        />
      ))}
      <SvgText x={80} y={148} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        LIFO
      </SvgText>
      <SvgText x={240} y={22} fill={colors.neutral.textPrimary} fontSize={12} fontWeight="600" textAnchor="middle">
        {label("File", "Queue")}
      </SvgText>
      {[0, 1, 2, 3].map((i) => (
        <Rect
          key={`q-${i}`}
          x={170 + i * 32}
          y={70}
          width={28}
          height={36}
          rx={6}
          fill={colors.soft.blueBg}
          stroke={colors.soft.blueBorder}
          strokeWidth={1.5}
        />
      ))}
      <SvgText x={180} y={128} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        in
      </SvgText>
      <SvgText x={290} y={128} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        out
      </SvgText>
      <SvgText x={240} y={148} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        FIFO
      </SvgText>
    </Svg>
  );
}

function ControlFlowDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect x={110} y={12} width={100} height={28} rx={8} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={1.5} />
      <SvgText x={160} y={31} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        if ?
      </SvgText>
      <Line x1={160} y1={40} x2={80} y2={70} stroke={colors.primary.blue} strokeWidth={1.5} />
      <Line x1={160} y1={40} x2={240} y2={70} stroke={colors.primary.blue} strokeWidth={1.5} />
      <Rect x={30} y={70} width={100} height={28} rx={8} fill={colors.soft.blueBg} stroke={colors.semantic.success} strokeWidth={1.5} />
      <SvgText x={80} y={89} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {label("oui → action", "yes → action")}
      </SvgText>
      <Rect x={190} y={70} width={100} height={28} rx={8} fill={colors.soft.blueBg} stroke={colors.semantic.error} strokeWidth={1.5} />
      <SvgText x={240} y={89} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {label("non → else", "no → else")}
      </SvgText>
      <Rect x={70} y={118} width={180} height={28} rx={8} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={1.5} />
      <SvgText x={160} y={137} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {label("boucle : tant que…", "loop: while…")}
      </SvgText>
    </Svg>
  );
}

function OopInheritanceDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={160} viewBox="0 0 320 160">
      <Rect x={110} y={16} width={100} height={36} rx={10} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={160} y={38} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {label("Classe", "Class")}
      </SvgText>
      <Line x1={160} y1={52} x2={80} y2={88} stroke={colors.primary.blue} strokeWidth={1.5} />
      <Line x1={160} y1={52} x2={240} y2={88} stroke={colors.primary.blue} strokeWidth={1.5} />
      <Rect x={30} y={88} width={100} height={36} rx={10} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={80} y={110} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {label("Instance A", "Instance A")}
      </SvgText>
      <Rect x={190} y={88} width={100} height={36} rx={10} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={240} y={110} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {label("Instance B", "Instance B")}
      </SvgText>
      <SvgText x={160} y={148} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("1 plan → plusieurs objets", "1 blueprint → many objects")}
      </SvgText>
    </Svg>
  );
}

function MonolithMicroDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect x={20} y={35} width={120} height={80} rx={12} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={80} y={70} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {label("Monolithe", "Monolith")}
      </SvgText>
      <SvgText x={80} y={90} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        {label("1 app", "1 app")}
      </SvgText>
      <Rect x={180} y={28} width={55} height={36} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <Rect x={245} y={28} width={55} height={36} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <Rect x={180} y={78} width={55} height={36} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <Rect x={245} y={78} width={55} height={36} rx={8} fill={colors.soft.blueBg} stroke={colors.soft.blueBorder} strokeWidth={1.5} />
      <SvgText x={207} y={50} fill={colors.neutral.textPrimary} fontSize={9} fontWeight="600" textAnchor="middle">
        API
      </SvgText>
      <SvgText x={272} y={50} fill={colors.neutral.textPrimary} fontSize={9} fontWeight="600" textAnchor="middle">
        Auth
      </SvgText>
      <SvgText x={207} y={100} fill={colors.neutral.textPrimary} fontSize={9} fontWeight="600" textAnchor="middle">
        Pay
      </SvgText>
      <SvgText x={272} y={100} fill={colors.neutral.textPrimary} fontSize={9} fontWeight="600" textAnchor="middle">
        Notif
      </SvgText>
      <SvgText x={240} y={140} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        {label("services", "services")}
      </SvgText>
    </Svg>
  );
}

function DebugLoopDiagram({ colors, label }: DiagramProps) {
  const steps = [
    label("Reproduire", "Reproduce"),
    label("Isoler", "Isolate"),
    label("Corriger", "Fix"),
    label("Vérifier", "Verify"),
  ];
  return (
    <Svg width="100%" height={140} viewBox="0 0 320 140">
      {steps.map((name, i) => {
        const x = 12 + i * 78;
        return (
          <Rect
            key={name}
            x={x}
            y={45}
            width={70}
            height={40}
            rx={10}
            fill={i % 2 === 0 ? colors.soft.blueMuted : colors.soft.blueBg}
            stroke={colors.primary.blue}
            strokeWidth={1.5}
          />
        );
      })}
      {steps.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={47 + i * 78}
          y={70}
          fill={colors.neutral.textPrimary}
          fontSize={9}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
      <SvgText x={160} y={120} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("méthode de débogage", "debugging method")}
      </SvgText>
    </Svg>
  );
}

function GitStageDiagram({ colors, label }: DiagramProps) {
  const zones = [
    label("Working", "Working"),
    label("Stage", "Stage"),
    label("Commit", "Commit"),
  ];
  return (
    <Svg width="100%" height={140} viewBox="0 0 320 140">
      {zones.map((name, i) => (
        <Rect
          key={name}
          x={20 + i * 100}
          y={40}
          width={88}
          height={50}
          rx={12}
          fill={i === 1 ? colors.soft.blueMuted : colors.soft.blueBg}
          stroke={colors.primary.blue}
          strokeWidth={1.5}
        />
      ))}
      {zones.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={64 + i * 100}
          y={70}
          fill={colors.neutral.textPrimary}
          fontSize={11}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
      <Line x1={108} y1={65} x2={120} y2={65} stroke={colors.primary.blue} strokeWidth={2} />
      <Line x1={208} y1={65} x2={220} y2={65} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={160} y={120} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        add → commit
      </SvgText>
    </Svg>
  );
}

function AgileBoardDiagram({ colors, label }: DiagramProps) {
  const cols = [
    label("Backlog", "Backlog"),
    label("Sprint", "Sprint"),
    label("Done", "Done"),
  ];
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      {cols.map((name, i) => (
        <Rect
          key={name}
          x={18 + i * 100}
          y={20}
          width={90}
          height={100}
          rx={10}
          fill={colors.soft.blueBg}
          stroke={colors.soft.blueBorder}
          strokeWidth={1.5}
        />
      ))}
      {cols.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={63 + i * 100}
          y={42}
          fill={colors.neutral.textPrimary}
          fontSize={11}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
      <Rect x={28} y={55} width={70} height={18} rx={4} fill={colors.soft.blueMuted} />
      <Rect x={28} y={80} width={70} height={18} rx={4} fill={colors.soft.blueMuted} />
      <Rect x={128} y={55} width={70} height={18} rx={4} fill={colors.primary.blue} />
      <Rect x={228} y={55} width={70} height={18} rx={4} fill={colors.semantic.success} />
    </Svg>
  );
}

function CodeReviewFlowDiagram({ colors, label }: DiagramProps) {
  const steps = [
    label("Auteur", "Author"),
    "PR",
    label("Revue", "Review"),
    label("Merge", "Merge"),
  ];
  return (
    <Svg width="100%" height={130} viewBox="0 0 320 130">
      {steps.map((name, i) => (
        <Rect
          key={name}
          x={12 + i * 78}
          y={40}
          width={70}
          height={40}
          rx={10}
          fill={i === 2 ? colors.soft.blueMuted : colors.soft.blueBg}
          stroke={colors.primary.blue}
          strokeWidth={1.5}
        />
      ))}
      {steps.map((name, i) => (
        <SvgText
          key={`t-${name}`}
          x={47 + i * 78}
          y={65}
          fill={colors.neutral.textPrimary}
          fontSize={10}
          fontWeight="600"
          textAnchor="middle"
        >
          {name}
        </SvgText>
      ))}
      <SvgText x={160} y={110} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("flux de revue de code", "code review flow")}
      </SvgText>
    </Svg>
  );
}

function HtmlSkeletonDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      <Rect x={40} y={16} width={240} height={130} rx={10} fill={colors.soft.blueBg} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={160} y={38} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {"<html>"}
      </SvgText>
      <Rect x={60} y={50} width={200} height={28} rx={6} fill={colors.soft.blueMuted} stroke={colors.soft.blueBorder} strokeWidth={1} />
      <SvgText x={160} y={69} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {"<head>"}
      </SvgText>
      <Rect x={60} y={90} width={200} height={40} rx={6} fill={colors.soft.blueMuted} stroke={colors.soft.blueBorder} strokeWidth={1} />
      <SvgText x={160} y={115} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        {"<body>"}
      </SvgText>
      <SvgText x={160} y={162} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("squelette HTML", "HTML skeleton")}
      </SvgText>
    </Svg>
  );
}

function CssBoxModelDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={170} viewBox="0 0 320 170">
      <Rect x={30} y={20} width={260} height={120} rx={8} fill={colors.soft.blueBg} stroke={colors.semantic.warning} strokeWidth={2} />
      <SvgText x={160} y={38} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        margin
      </SvgText>
      <Rect x={55} y={45} width={210} height={80} rx={6} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={1.5} />
      <SvgText x={160} y={60} fill={colors.neutral.textSecondary} fontSize={9} textAnchor="middle">
        border / padding
      </SvgText>
      <Rect x={95} y={70} width={130} height={40} rx={4} fill={colors.neutral.card} stroke={colors.primary.blue} strokeWidth={1.5} />
      <SvgText x={160} y={95} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        content
      </SvgText>
      <SvgText x={160} y={160} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("modèle de boîte CSS", "CSS box model")}
      </SvgText>
    </Svg>
  );
}

function CacheCdnDiagram({ colors, label }: DiagramProps) {
  return (
    <Svg width="100%" height={150} viewBox="0 0 320 150">
      <Rect x={20} y={50} width={70} height={50} rx={10} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={55} y={80} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        {label("User", "User")}
      </SvgText>
      <Line x1={90} y1={75} x2={130} y2={75} stroke={colors.primary.blue} strokeWidth={2} />
      <Rect x={130} y={50} width={70} height={50} rx={10} fill={colors.soft.blueBg} stroke={colors.semantic.success} strokeWidth={2} />
      <SvgText x={165} y={80} fill={colors.neutral.textPrimary} fontSize={11} fontWeight="600" textAnchor="middle">
        CDN
      </SvgText>
      <Line x1={200} y1={75} x2={240} y2={75} stroke={colors.soft.blueBorder} strokeWidth={2} strokeDasharray="4 3" />
      <Rect x={240} y={50} width={60} height={50} rx={10} fill={colors.soft.blueMuted} stroke={colors.primary.blue} strokeWidth={2} />
      <SvgText x={270} y={80} fill={colors.neutral.textPrimary} fontSize={10} fontWeight="600" textAnchor="middle">
        Origin
      </SvgText>
      <SvgText x={160} y={130} fill={colors.neutral.textSecondary} fontSize={10} textAnchor="middle">
        {label("cache proche de l'utilisateur", "cache near the user")}
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
  "request-lifecycle": RequestLifecycleDiagram,
  "rest-api": RestApiDiagram,
  "jwt-flow": JwtFlowDiagram,
  cors: CorsDiagram,
  "git-branch": GitBranchDiagram,
  "ci-cd": CiCdDiagram,
  "solid-overview": SolidOverviewDiagram,
  "client-server-web": ClientServerWebDiagram,
  "dom-tree": DomTreeDiagram,
  "docker-layers": DockerLayersDiagram,
  "mvc-architecture": MvcArchitectureDiagram,
  "test-pyramid": TestPyramidDiagram,
  encapsulation: EncapsulationDiagram,
  "ports-map": PortsMapDiagram,
  "dns-hierarchy": DnsHierarchyDiagram,
  "sdlc-cycle": SdlcCycleDiagram,
  "algo-search": AlgoSearchDiagram,
  "stack-queue": StackQueueDiagram,
  "control-flow": ControlFlowDiagram,
  "oop-inheritance": OopInheritanceDiagram,
  "monolith-micro": MonolithMicroDiagram,
  "debug-loop": DebugLoopDiagram,
  "git-stage": GitStageDiagram,
  "agile-board": AgileBoardDiagram,
  "code-review-flow": CodeReviewFlowDiagram,
  "html-skeleton": HtmlSkeletonDiagram,
  "css-box-model": CssBoxModelDiagram,
  "cache-cdn": CacheCdnDiagram,
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
  "request-lifecycle": {
    fr: "Cycle d'une requête",
    en: "Request lifecycle",
  },
  "rest-api": { fr: "Méthodes REST", en: "REST methods" },
  "jwt-flow": { fr: "Flux JWT", en: "JWT flow" },
  cors: { fr: "CORS", en: "CORS" },
  "git-branch": { fr: "Branches Git", en: "Git branches" },
  "ci-cd": { fr: "Pipeline CI/CD", en: "CI/CD pipeline" },
  "solid-overview": { fr: "Principes SOLID", en: "SOLID principles" },
  "client-server-web": {
    fr: "Client, serveur et DB",
    en: "Client, server and DB",
  },
  "dom-tree": { fr: "Arbre DOM", en: "DOM tree" },
  "docker-layers": { fr: "Couches Docker", en: "Docker layers" },
  "mvc-architecture": { fr: "Architecture MVC", en: "MVC architecture" },
  "test-pyramid": { fr: "Pyramide de tests", en: "Test pyramid" },
  encapsulation: { fr: "Encapsulation", en: "Encapsulation" },
  "ports-map": { fr: "Ports et services", en: "Ports and services" },
  "dns-hierarchy": { fr: "Hiérarchie DNS", en: "DNS hierarchy" },
  "sdlc-cycle": { fr: "Cycle de vie logiciel", en: "Software lifecycle" },
  "algo-search": { fr: "Recherche linéaire vs dichotomique", en: "Linear vs binary search" },
  "stack-queue": { fr: "Pile et file", en: "Stack and queue" },
  "control-flow": { fr: "Conditions et boucles", en: "Conditions and loops" },
  "oop-inheritance": { fr: "Classe et instances", en: "Class and instances" },
  "monolith-micro": { fr: "Monolithe vs services", en: "Monolith vs services" },
  "debug-loop": { fr: "Boucle de débogage", en: "Debug loop" },
  "git-stage": { fr: "Zones Git", en: "Git areas" },
  "agile-board": { fr: "Tableau Agile", en: "Agile board" },
  "code-review-flow": { fr: "Revue de code", en: "Code review" },
  "html-skeleton": { fr: "Squelette HTML", en: "HTML skeleton" },
  "css-box-model": { fr: "Modèle de boîte CSS", en: "CSS box model" },
  "cache-cdn": { fr: "Cache et CDN", en: "Cache and CDN" },
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
