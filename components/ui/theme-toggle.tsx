"use client"

import { IconButton, Menu, Portal } from "@chakra-ui/react"
import { useTheme } from "next-themes"
import * as React from "react"
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const getIcon = () => {
    if (theme === "dark") return <LuMoon />
    if (theme === "light") return <LuSun />
    return <LuMonitor />
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton
          aria-label="切换主题"
          variant="ghost"
          size="sm"
        >
          {getIcon()}
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="light" onClick={() => setTheme("light")}>
              <LuSun style={{ marginRight: "8px" }} />
              浅色
            </Menu.Item>
            <Menu.Item value="dark" onClick={() => setTheme("dark")}>
              <LuMoon style={{ marginRight: "8px" }} />
              深色
            </Menu.Item>
            <Menu.Item value="system" onClick={() => setTheme("system")}>
              <LuMonitor style={{ marginRight: "8px" }} />
              跟随系统
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
