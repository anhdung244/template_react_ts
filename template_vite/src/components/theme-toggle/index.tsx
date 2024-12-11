import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core"
import { IconMoonStars, IconSun } from "@tabler/icons-react"

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDark = colorScheme === "dark"

  return (
    <Group align="center" my="xl">
      <ActionIcon onClick={toggleColorScheme} size="lg">
        {isDark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Group>
  )
}

export default ThemeToggle
