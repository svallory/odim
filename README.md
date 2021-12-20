# odim
OS and Dotfiles Installation Manager

## What it MUST be

1. Out of the way
2. Easy to extand (plugins written in TS)
3. Executable with no dependencies
4. Multi-platform (Mac, Linux, Windows)
5. Multi-distro

## So it uses

1. Deno ([see compilng executable](https://deno.land/manual/tools/compiler#compiling-executables))
2. Typescript (because it's almost as simple as JS but much better)
3. Inversion of Control

## And it has

### A pluggable architecture
#### For everything
Like, EVERY THING...

- Manifest parser (we don't even use manifests yet)
- Actions
- Filters
- Installers
- Detectives (which find out information about the system we are moving into)