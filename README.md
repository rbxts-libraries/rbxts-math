# Math

Math is a highly lightweight utility, served as an addition to Roblox's traditional Math library.

## Installation

### 📦 — NPM:

```
npm i @rbxts/math
```

### 🧶 — Yarn:

```
yarn add @rbxts/math
```

### 📀 — pnPM:

```
pnpm add @rbxts/math
```

## Math API

### `Math.Map`

```ts
function Map<T extends number>(
	number: number,
	minimumA: number,
	maximumA: number,
	minimumB: number,
	maximumB: number,
): T;
```

Map the specified number using two ranges.

### `Math.Lerp`

```ts
function Lerp<T extends number>(minimum: number, maximum: number, alpha: number): T;
```

Interpolate between two specified numbers with a given alpha number.

### `Math.LerpClamp`

```ts
function LerpClamp<T extends number>(minimum: number, maximum: number, alpha: number): T;
```

Interpolate between two specified numbers with a given alpha number, which is clamped.

### `Math.InverseClamp`

```ts
function InverseClamp<T extends number>(minimum: number, maximum: number, alpha: number): T;
```

Inverse lerp between two specified numbers to return its alpha number.

### `Math.LawOfCosines`

```ts
function LawOfCosines<T extends number>(numberA: number, numberB: number, numberC: number): T;
```

Solve for the opposite angle from numberC.

### `Math.Round`

```ts
function Round<T extends number>(number: number, precision: number): T;
```

Round the specified number relative to the given precision factor, utilizing `math.round`.

### `Math.RoundUp`

```ts
function RoundUp<T extends number>(number: number, precision: number): T;
```

Round the specified number relative to the given precision factor, utilizing `math.ceil`.

### `Math.RoundDown`

```ts
function RoundDown<T extends number>(number: number, precision: number): T;
```

Round the specified number relative to the given precision factor, utilizing `math.floor`.

### `Math.EulersNumber`

```ts
function EulersNumber<T extends number>(): T;
```

Return eulers number.

### `Math.EulersConstant`

```ts
function EulersConstant<T extends number>(): T;
```

Return eulers constant.

### `Math.GammaCoefficient`

```ts
function GammaCoefficient<T extends number>(): T;
```

Return the gamma coefficient.

### `Math.GammaQuad`

```ts
function GammaQuad<T extends number>(): T;
```

Return the gamma quad.

### `Math.GammaSet`

```ts
function GammaSet<T extends number>(): T;
```

Return the gamma set.

### `Math.E`

```ts
function E<T extends number>(): T;
```

Return E.

### `Math.Tau`

```ts
function Tau<T extends number>(): T;
```

Return tau.

### `Math.AperysConstant`

```ts
function AperysConstant<T extends number>(): T;
```

Return apery's constant.

### `Math.BelphegorsPrimeNumber`

```ts
function BelphegorsPrimeNumber<T extends number>(): T;
```

Return belphegor's prime number.

## Example

```ts
// Services
import { Workspace } from "@rbxts/services";

// Modules
import { Math } from "@rbxts/math";

// Functions
const Part = new Instance("Part");
Part.Name = "Part";
Part.Position = new Vector3(0, 5, 0);
Part.Size = new Vector3(5, 1, 5);
Part.Parent = Workspace;

const partPositionClamped = Math.LerpClamp(Part.Position.X + 1, Part.Position.Y + 1, Part.Position.Z + 1);

print(partPositionClamped);
```
