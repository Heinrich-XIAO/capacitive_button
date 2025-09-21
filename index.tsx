import { sel, SolderJumper } from "@tscircuit/core"
import { TTP223_TD } from "@tsci/Heinrich-XIAO.TTP223_TD"

export default () => (
  <board width={10} height={10} autorouter="auto" outline={[
    {
      x: -15,
      y: 6
    },
    {
      x: 6.5,
      y: 6
    },
    {
      x: 6.5,
      y: -4
    },
    {
      x: -15,
      y: -4
    }
  ]}>
    <TTP223_TD
      name="U1"
      connections={{
        VDD: sel.net.VCC,
        GND: sel.net.GND,
        OUT: "net.OUT",
        SO: ".TP1 > .pin1",
        STG: "net.STG",
        SLH: "net.SLH"
      }}
    />

    <solderjumper
      name="J1"
      footprint="solderjumper2_p1_ph0.5_pw0.5"
      connections={{
        1: ".U1 > .STG",
        2: sel.net.VCC
      }}
      pcbRotation={90}
      pcbX={-2}
      pcbY={3}
    />

    <solderjumper
      name="J2"
      footprint="solderjumper2_p1_ph0.5_pw0.5"
      connections={{
        1: ".U1 > .SLH",
        2: sel.net.VCC
      }}
      pcbRotation={90}
      pcbX={1}
      pcbY={3}
    />

    <led
      name="LED1"
      footprint="0603"
      color="red"
      connections={{
        anode: sel.net.VCC,
        cathode: "net.LED_CAT"
      }}
      pcbX={-3}
      pcbY={-1.3}
      pcbRotation={-90}
    />

    <resistor
      name="R1"
      footprint="0603"
      resistance={330}
      connections={{
        pos: "net.LED_CAT",
        neg: sel.net.GND
      }}
      pcbX={3}
      pcbY={-1.3}
      pcbRotation={90}
    />

    <jumper
      name="J3"
      footprint="pinrow3"
      connections={{
        1: sel.net.GND,
        2: "net.OUT",
        3: sel.net.VCC
      }}
      pcbRotation={90}
      pcbX={5.5}
      pcbY={1}
    />

    <testpoint
      name="TP1"
      footprintVariant="pad"
      padShape="rect"
      width={9}
      layer="bottom"
      connections={{
        pin1: "net.SENSOR"
      }}
      pcbY={1}
      pcbX={-10}
    />
  </board>
)
