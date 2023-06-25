// Math.d
// Written by Demo (R0BL0XIAN_D3M0)
// [https://www.roblox.com/users/289025524/profile]
// 05/30/2023

// Types

/**
	@within Math

	@function Map

	@param number number -- The primary number.

	@param minimumA number -- The initial minimum number.

	@param maximumA number -- The initial maximum number.

	@param minimumB number -- The secondary minimum number.

	@param maximumB number -- The secondary maximum number.

	@return number -- Return the mapped number.

	Map the specified number using two ranges.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local mappedNumber: number = Math.Map(1, 1, 2, 3, 4, 5)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const mappedNumber: number = Math.Map(1, 1, 2, 3, 4, 5)
	```
*/
export function Map<T extends number>(
	number: number,
	minimumA: number,
	maximumA: number,
	minimumB: number,
	maximumB: number,
): T;

/**
	@within Math

	@function Lerp

	@param minimum number -- The minimum number.

	@param maximum number -- The maximum number.

	@param alpha number -- The alpha number.

	@return number -- Return the lerped number.

	Interpolate between two specified numbers with a given alpha number.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local lerpedNumber: number = Math.Lerp(1, 5, 1)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const lerpedNumber: number = Math.Lerp(1, 5, 1)
	```
*/
export function Lerp<T extends number>(minimum: number, maximum: number, alpha: number): T;

/**
	@within Math

	@function LerpClamp

	@param minimum number -- The minimum number.

	@param maximum number -- The maximum number.

	@param alpha number -- The alpha number.

	@return number -- Return the clamped lerped number.

	Interpolate between two specified numbers with a given alpha number, which is clamped.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local clampedNumber: number = Math.LerpClamp(1, 5, 1)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const clampedNumber: number = Math.LerpClamp(1, 5, 1)
	```
*/
export function LerpClamp<T extends number>(minimum: number, maximum: number, alpha: number): T;

/**
	@within Math

	@function InverseClamp

	@param minimum number -- The minimum number.

	@param maximum number -- The maximum number.

	@param number number -- The primary number.

	@return number -- Return the inversed lerped (alpha) number.

	Inverse lerp between two specified numbers to return its alpha number.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local inversedNumber: number = Math.InverseClamp(1, 5, 1)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const inversedNumber: number = Math.InverseClamp(1, 5, 1)
	```
*/
export function InverseClamp<T extends number>(minimum: number, maximum: number, alpha: number): T;

/**
	@within Math

	@function LawOfCosines

	@param numberA number -- The initial number.

	@param numberB number -- The primary number.

	@param numberC number -- The secondary number.

	@return number -- Return the opposite angled number.

	Solve for the opposite angle from numberC.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local cosinedNumber: number = Math.LawOfCosines(1, 2, 3)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const cosinedNumber: number = Math.LawOfCosines(1, 2, 3)
	```
*/
export function LawOfCosines<T extends number>(numberA: number, numberB: number, numberC: number): T;

/**
	@within Math

	@function Round

	@param number number -- The primary number.

	@param precision number -- The precision factoring number.

	@return number -- Return the rounded number.

	Round the specified number relative to the given precision factor, utilizing `math.round`.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local roundedNumber: number = Math.Round(5, 2)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const roundedNumber: number = Math.Round(5, 2)
	```
*/
export function Round<T extends number>(number: number, precision: number): T;

/**
	@within Math

	@function RoundUp

	@param number number -- The primary number.

	@param precision number -- The precision factoring number.

	@return number -- Return the rounded number.

	Round the specified number relative to the given precision factor, utilizing `math.ceil`.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local roundedNumber: number = Math.RoundUp(5, 2)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const roundedNumber: number = Math.RoundUp(5, 2)
	```
*/
export function RoundUp<T extends number>(number: number, precision: number): T;

/**
	@within Math

	@function RoundDown

	@param number number -- The primary number.

	@param precision number -- The precision factoring number.

	@return number -- Return the rounded number.

	Round the specified number relative to the given precision factor, utilizing `math.floor`.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local roundedNumber: number = Math.RoundDown(5, 2)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const roundedNumber: number = Math.RoundDown(5, 2)
	```
*/
export function RoundDown<T extends number>(number: number, precision: number): T;

/**
	@within Math

	@function EulersNumber

	@return number -- Return the euler number.

	Return eulers number.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local eulersNumber: number = Math.EulersNumber()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const eulersNumber: number = Math.EulersNumber()
	```
*/
export function EulersNumber<T extends number>(): T;

/**
	@within Math

	@function EulersConstant

	@return number -- Return the euler constant.

	Return eulers constant.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local eulersConstant: number = Math.EulersConstant()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const eulersConstant: number = Math.EulersConstant()
	```
*/
export function EulersConstant<T extends number>(): T;

/**
	@within Math

	@function GammaCoefficient

	@return number -- Return the gamma coefficient.

	Return the gamma coefficient.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local gammaCoefficient: number = Math.GammaCoefficient()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const gammaCoefficient: number = Math.GammaCoefficient()
	```
*/
export function GammaCoefficient<T extends number>(): T;

/**
	@within Math

	@function GammaQuad

	@return number -- Return the gamma quad.

	Return the gamma quad.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local gammaQuad: number = Math.GammaQuad()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const gammaQuad: number = Math.GammaQuad()
	```
*/
export function GammaQuad<T extends number>(): T;

/**
	@within Math

	@function GammaSet

	@return number -- Return the gamma set.

	Return the gamma set.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local gammaSet: number = Math.GammaSet()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const gammaSet: number = Math.GammaSet()
	```
*/
export function GammaSet<T extends number>(): T;

/**
	@within Math

	@function E

	@return number -- Return e.

	Return E.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local _e: number = Math.E()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const _e: number = Math.E()
	```
*/
export function E<T extends number>(): T;

/**
	@within Math

	@function Tau

	@return number -- Return tau.

	Return tau.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local tau: number = Math.Tau()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const tau: number = Math.Tau()
	```
*/
export function Tau<T extends number>(): T;

/**
	@within Math

	@function AperysConstant

	@return number -- Return apery's constant.

	Return apery's constant.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local aperysConstant: number = Math.AperysConstant()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const aperysConstant: number = Math.AperysConstant()
	```
*/
export function AperysConstant<T extends number>(): T;

/**
	@within Math

	@function BelphegorsPrimeNumber

	@return number -- Return belphegor's prime number.

	Return belphegor's prime number.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local belphegorsPrimeNumber: number = Math.BelphegorsPrimeNumber()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const belphegorsPrimeNumber: number = Math.BelphegorsPrimeNumber()
	```
*/
export function BelphegorsPrimeNumber<T extends number>(): T;
