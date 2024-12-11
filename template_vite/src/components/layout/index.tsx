import "react-resizable/css/styles.css"

import { AppShell, Text } from "@mantine/core"
import { SyntheticEvent, useState } from "react"
import { Resizable } from "react-resizable"
import { Outlet } from "react-router-dom"

import ThemeToggle from "../theme-toggle"

const Layout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300)

  const handleResize = (_: SyntheticEvent, data: { size: { width: number } }) => {
    setSidebarWidth(data.size.width)
  }
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: sidebarWidth, breakpoint: "sm", collapsed: { mobile: true } }}
    >
      <AppShell.Header>
        <Text>Header</Text>
      </AppShell.Header>
      <AppShell.Navbar>
        <Resizable
          width={sidebarWidth}
          axis="x"
          onResize={handleResize}
          resizeHandles={["e"]}
          minConstraints={[100, Infinity]}
          maxConstraints={[400, Infinity]}
        >
          <div className="relative box-border h-full border-r border-gray-300 bg-gray-100 p-2">
            <h2 className="text-lg">Sidebar</h2>
            <div className="absolute -right-1.5 top-1/2 flex size-2.5 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-gray-300 shadow-sm">
              <span className="text-xs text-gray-600">⋮</span>
            </div>
          </div>
        </Resizable>
      </AppShell.Navbar>
      <AppShell.Footer>
        <Text>Footer</Text>
      </AppShell.Footer>
      <AppShell.Main>
        <Outlet />
        <ThemeToggle />
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout
