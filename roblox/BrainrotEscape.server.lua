-- Brainrot Escape: Factory Frenzy
-- Place this Script in ServerScriptService in a blank Roblox place.
-- All geometry, names, and effects are original and generated at runtime.

local Players = game:GetService("Players")
local Lighting = game:GetService("Lighting")
local TweenService = game:GetService("TweenService")
local Debris = game:GetService("Debris")

local MAP_NAME = "BrainrotEscapeMap"
local START_CFRAME = CFrame.new(0, 8, 0)
local CHECKPOINTS = {
	{ name = "Factory Hub", position = Vector3.new(0, 3, 0) },
	{ name = "Conveyor Crossing", position = Vector3.new(42, 8, -8) },
	{ name = "Banana Hall", position = Vector3.new(88, 8, -8) },
	{ name = "Fusion Room", position = Vector3.new(132, 8, 12) },
	{ name = "Boss Lift", position = Vector3.new(174, 8, 12) },
}

local COLORS = {
	ink = Color3.fromRGB(30, 22, 48),
	cream = Color3.fromRGB(255, 238, 180),
	pink = Color3.fromRGB(255, 87, 174),
	cyan = Color3.fromRGB(72, 235, 225),
	lime = Color3.fromRGB(188, 255, 83),
	orange = Color3.fromRGB(255, 147, 52),
	red = Color3.fromRGB(220, 72, 82),
	purple = Color3.fromRGB(145, 95, 255),
}

local oldMap = workspace:FindFirstChild(MAP_NAME)
if oldMap then
	oldMap:Destroy()
end

local map = Instance.new("Folder")
map.Name = MAP_NAME
map.Parent = workspace

Lighting.ClockTime = 18.5
Lighting.Brightness = 1.2
Lighting.Ambient = Color3.fromRGB(52, 43, 72)
Lighting.OutdoorAmbient = Color3.fromRGB(38, 34, 58)
Lighting.EnvironmentDiffuseScale = 0.65
Lighting.EnvironmentSpecularScale = 0.25

local state = {
	round = 1,
	event = "Warm-up",
	eventEndsAt = 0,
	bossHealth = 100,
	bossAlive = false,
	bossModel = nil,
}
local fusionSparkParts = {}

local function part(name, size, cframe, color, material, parent)
	local item = Instance.new("Part")
	item.Name = name
	item.Size = size
	item.CFrame = cframe
	item.Color = color or COLORS.ink
	item.Material = material or Enum.Material.SmoothPlastic
	item.Anchored = true
	item.TopSurface = Enum.SurfaceType.Smooth
	item.BottomSurface = Enum.SurfaceType.Smooth
	item.Parent = parent or map
	return item
end

local function neon(name, size, cframe, color, parent)
	local item = part(name, size, cframe, color, Enum.Material.SmoothPlastic, parent)
	item.Reflectance = 0
	item.CanCollide = false
	return item
end

local function sparkle(position, color)
	local orb = neon("EventSpark", Vector3.new(1.5, 1.5, 1.5), CFrame.new(position), color)
	orb.Shape = Enum.PartType.Ball
	local tween = TweenService:Create(orb, TweenInfo.new(0.8, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut, -1, true), {
		Size = Vector3.new(2.4, 2.4, 2.4),
	})
	tween:Play()
	return orb
end

local function getCharacterPlayer(hit)
	local character = hit and hit.Parent
	if not character then
		return nil
	end
	return Players:GetPlayerFromCharacter(character)
end

local function teleportToCheckpoint(player, checkpointIndex)
	local checkpoint = CHECKPOINTS[checkpointIndex] or CHECKPOINTS[1]
	player:SetAttribute("Checkpoint", checkpointIndex)
	local character = player.Character
	local root = character and character:FindFirstChild("HumanoidRootPart")
	if root then
		root.CFrame = CFrame.new(checkpoint.position + Vector3.new(0, 4, 0))
	end
end

local function award(player, amount, reason)
	if state.event == "Double Points" then
		amount *= 2
	end
	local stats = player:FindFirstChild("leaderstats")
	local points = stats and stats:FindFirstChild("BrainrotPoints")
	if points then
		points.Value += amount
	end
	local ui = player:FindFirstChild("PlayerGui")
	local toast = ui and ui:FindFirstChild("FactoryHUD") and ui.FactoryHUD:FindFirstChild("Toast")
	if toast then
		toast.Text = string.format("+%d  %s", amount, reason)
		toast.Visible = true
		task.delay(2.2, function()
			if toast then
				toast.Visible = false
			end
		end)
	end
end

local function createCheckpoint(index)
	local info = CHECKPOINTS[index]
	local pad = part("Checkpoint_" .. index, Vector3.new(10, 0.5, 10), CFrame.new(info.position), COLORS.cyan, Enum.Material.SmoothPlastic)
	pad.CanTouch = true
	pad.Touched:Connect(function(hit)
		local player = getCharacterPlayer(hit)
		if player and (player:GetAttribute("Checkpoint") or 1) < index then
			teleportToCheckpoint(player, index)
			award(player, 15, "checkpoint secured")
		end
	end)
	return pad
end

local function createHazard(name, size, cframe, color, damage)
	local hazard = part(name, size, cframe, color or COLORS.red, Enum.Material.SmoothPlastic)
	hazard.Touched:Connect(function(hit)
		local character = hit and hit.Parent
		local humanoid = character and character:FindFirstChildOfClass("Humanoid")
		if humanoid then
			humanoid:TakeDamage(damage or 100)
		end
	end)
	return hazard
end

local function createCollectible(position, value, collectibleName)
	local token = neon(collectibleName or "BrainrotByte", Vector3.new(1.6, 1.6, 1.6), CFrame.new(position), COLORS.lime)
	token.Shape = Enum.PartType.Ball
	local claimed = false
	token.Touched:Connect(function(hit)
		local player = getCharacterPlayer(hit)
		if player and not claimed then
			claimed = true
			award(player, value, "collected " .. (collectibleName or "Brainrot Byte"))
			token:Destroy()
		end
	end)
	return token
end

local function createPrompt(parent, actionText, objectText, callback)
	local prompt = Instance.new("ProximityPrompt")
	prompt.ActionText = actionText
	prompt.ObjectText = objectText
	prompt.HoldDuration = 0.35
	prompt.MaxActivationDistance = 12
	prompt.RequiresLineOfSight = false
	prompt.Parent = parent
	prompt.Triggered:Connect(callback)
	return prompt
end

-- Hub: a colorful factory plaza with three readable routes.
part("HubFloor", Vector3.new(52, 1, 42), CFrame.new(0, 0, 0), COLORS.ink, Enum.Material.Concrete)
part("HubBackWall", Vector3.new(52, 16, 1), CFrame.new(0, 8, 21), COLORS.purple, Enum.Material.Brick)
part("HubLeftWall", Vector3.new(1, 16, 42), CFrame.new(-26, 8, 0), COLORS.pink, Enum.Material.Brick)
for i, position in ipairs({Vector3.new(-17, 2, -10), Vector3.new(0, 2, -10), Vector3.new(17, 2, -10)}) do
	local pillar = part("HubPillar" .. i, Vector3.new(4, 8, 4), CFrame.new(position), ({COLORS.pink, COLORS.cyan, COLORS.orange})[i], Enum.Material.SmoothPlastic)
	sparkle(position + Vector3.new(0, 5, 0), ({COLORS.pink, COLORS.cyan, COLORS.orange})[i])
end
local startPad = part("StartPad", Vector3.new(12, 0.5, 8), START_CFRAME, COLORS.lime, Enum.Material.SmoothPlastic)
createPrompt(startPad, "Start Run", "Factory Escape", function(player)
	teleportToCheckpoint(player, player:GetAttribute("Checkpoint") or 1)
	award(player, 5, "run started")
end)

for i = 1, 5 do
	createCheckpoint(i)
end

-- Obby: each gap is 10-14 studs, a forgiving range for the default avatar.
local platforms = {
	{Vector3.new(38, 5, -8), Vector3.new(12, 1, 10)},
	{Vector3.new(51, 8, -8), Vector3.new(10, 1, 10)},
	{Vector3.new(64, 11, -8), Vector3.new(10, 1, 10)},
	{Vector3.new(77, 8, -8), Vector3.new(10, 1, 10)},
	{Vector3.new(90, 5, -8), Vector3.new(12, 1, 10)},
	{Vector3.new(103, 8, 0), Vector3.new(11, 1, 10)},
	{Vector3.new(116, 11, 12), Vector3.new(11, 1, 10)},
	{Vector3.new(132, 8, 12), Vector3.new(16, 1, 14)},
}
for i, platformInfo in ipairs(platforms) do
	local platform = part("ObbyPlatform_" .. i, platformInfo[2], CFrame.new(platformInfo[1]), i % 2 == 0 and COLORS.cyan or COLORS.orange, Enum.Material.Metal)
	if i < 8 then
		createCollectible(platformInfo[1] + Vector3.new(0, 3, 0), 3, "Byte_" .. i)
	end
end
-- Waist-high rails make the intended route readable without blocking jumps.
for _, railInfo in ipairs({
	{Vector3.new(38, 7, -14), Vector3.new(150, 3, 0.6)},
	{Vector3.new(38, 7, -2), Vector3.new(150, 3, 0.6)},
}) do
	part("RouteRail", railInfo[2], CFrame.new(railInfo[1]), COLORS.purple, Enum.Material.Metal)
end
createHazard("FactoryVoid", Vector3.new(150, 1, 60), CFrame.new(75, -8, 0), COLORS.red, 100)
for i = 1, 4 do
	local beam = part("LaserBeam_" .. i, Vector3.new(1, 2.5, 5), CFrame.new(45 + i * 12, 11.5, -17), COLORS.red, Enum.Material.SmoothPlastic)
	createHazard("LaserHazard_" .. i, beam.Size, beam.CFrame, COLORS.red, 45)
end

-- Banana / slippery corridor: low friction floor, sliding bumpers, and a safe lane.
local corridorFloor = part("SlipperyCorridor", Vector3.new(34, 1, 16), CFrame.new(98, 3, -8), Color3.fromRGB(255, 219, 74), Enum.Material.Ice)
corridorFloor.CustomPhysicalProperties = PhysicalProperties.new(0.7, 0.03, 0.1, 1, 1)
for i = 1, 6 do
	local banana = neon("BananaBumper_" .. i, Vector3.new(3, 3, 3), CFrame.new(84 + i * 5, 5, -8 + (i % 2) * 5), COLORS.orange)
	banana.Shape = Enum.PartType.Ball
	local direction = i % 2 == 0 and 1 or -1
	TweenService:Create(banana, TweenInfo.new(2.4, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut, -1, true), {
		CFrame = banana.CFrame + Vector3.new(direction * 4, 0, 0),
	}):Play()
	banana.Touched:Connect(function(hit)
		local root = hit and hit.Parent and hit.Parent:FindFirstChild("HumanoidRootPart")
		if root then
			root.AssemblyLinearVelocity = Vector3.new(direction * 48, 16, direction * 18)
		end
	end)
end
createCollectible(Vector3.new(99, 6, -13), 12, "Golden Peel")

-- Fusion room: three original ingredients open the boss lift.
local fusionRoom = part("FusionRoom", Vector3.new(38, 14, 28), CFrame.new(137, 10, 12), COLORS.purple, Enum.Material.Slate)
fusionRoom.Transparency = 0.2
fusionRoom.CanCollide = false
local fusionDoor = part("FusionDoor", Vector3.new(14, 12, 1), CFrame.new(119, 9, 12), COLORS.ink, Enum.Material.Metal)
local fusionSparks = {
	{Vector3.new(128, 15, 4), "Fizz Spark"},
	{Vector3.new(140, 15, 20), "Wobble Spark"},
	{Vector3.new(150, 15, 4), "Neon Spark"},
}
for index, sparkInfo in ipairs(fusionSparks) do
	local spark = createCollectible(sparkInfo[1], 8, sparkInfo[2])
	spark:SetAttribute("FusionSpark", true)
	spark.CanTouch = false
	local sparkPrompt = createPrompt(spark, "Collect", sparkInfo[2], function(player)
		local current = player:GetAttribute("FusionSparks") or 0
		if current < 3 then
			player:SetAttribute("FusionSparks", current + 1)
			award(player, 8, sparkInfo[2])
			spark.Transparency = 1
			sparkPrompt.Enabled = false
		end
	end)
	table.insert(fusionSparkParts, {part = spark, prompt = sparkPrompt})
end
local fusionConsole = neon("FusionConsole", Vector3.new(4, 4, 2), CFrame.new(137, 4, 12), COLORS.cyan)
createPrompt(fusionConsole, "Fuse Sparks", "Fusion Console", function(player)
	local carried = player:GetAttribute("FusionSparks") or 0
	if carried >= 3 then
		player:SetAttribute("FusionSparks", 0)
		fusionDoor.CanCollide = false
		fusionDoor.Transparency = 0.75
		award(player, 40, "fusion complete")
	else
		local ui = player.PlayerGui:FindFirstChild("FactoryHUD")
		if ui then
			ui.Toast.Text = string.format("Need 3 sparks (%d/3)", carried)
			ui.Toast.Visible = true
		end
	end
end)

-- Restaurant mini-game: serve three hungry customers in a short loop.
local restaurant = part("Restaurant", Vector3.new(30, 10, 22), CFrame.new(174, 8, -16), COLORS.orange, Enum.Material.WoodPlanks)
local orders = {"Fizz noodles", "Pixel pizza", "Wobble waffle"}
local orderIndex = 1
local servingCounter = neon("ServingCounter", Vector3.new(8, 3, 3), CFrame.new(174, 4, -12), COLORS.cyan)
createPrompt(servingCounter, "Serve", "Byte Bistro order", function(player)
	award(player, 12, "served " .. orders[orderIndex])
	orderIndex = orderIndex % #orders + 1
end)
for i = 1, 3 do
	local customer = part("Customer_" .. i, Vector3.new(3, 5, 3), CFrame.new(165 + i * 6, 4, -20), ({COLORS.pink, COLORS.cyan, COLORS.lime})[i], Enum.Material.SmoothPlastic)
	customer.Shape = Enum.PartType.Ball
end

-- Boss arena and original boss: The Overcooked Crown.
local arenaFloor = part("BossArena", Vector3.new(48, 1, 42), CFrame.new(210, 0, 12), COLORS.ink, Enum.Material.Basalt)
local bossGate = part("BossGate", Vector3.new(2, 12, 28), CFrame.new(185, 7, 12), COLORS.pink, Enum.Material.SmoothPlastic)
part("BossLift", Vector3.new(20, 1, 28), CFrame.new(174, 8, 12), COLORS.purple, Enum.Material.Metal)
local bossCore = part("OvercookedCrown", Vector3.new(8, 8, 8), CFrame.new(210, 9, 12), COLORS.orange, Enum.Material.SmoothPlastic)
bossCore.Shape = Enum.PartType.Ball
local crownTop = neon("CrownTop", Vector3.new(12, 2, 4), CFrame.new(210, 14, 12), COLORS.lime)
local strikePrompt = createPrompt(bossCore, "Strike", "Overcooked Crown", function(player)
	if not state.bossAlive then
		return
	end
	state.bossHealth = math.max(0, state.bossHealth - 8)
	award(player, 2, "boss hit")
	if state.bossHealth <= 0 then
		state.bossAlive = false
		bossCore.Transparency = 1
		crownTop.Transparency = 1
		strikePrompt.Enabled = false
		for _, participant in ipairs(Players:GetPlayers()) do
			award(participant, 75, "CROWN POPPED")
		end
		state.event = "Factory cleared! Next round soon"
		state.eventEndsAt = os.clock() + 10
	end
end)
strikePrompt.Enabled = false
local bossSpawns = {
	Vector3.new(198, 3, 2),
	Vector3.new(222, 3, 2),
	Vector3.new(198, 3, 22),
	Vector3.new(222, 3, 22),
}
for i, spawnPosition in ipairs(bossSpawns) do
	createHazard("BossHotplate_" .. i, Vector3.new(5, 0.5, 5), CFrame.new(spawnPosition), COLORS.red, 35)
end

local function startBoss()
	state.bossAlive = true
	state.bossHealth = 100 + (state.round - 1) * 25
	bossCore.Transparency = 0
	crownTop.Transparency = 0
	bossGate.CanCollide = false
	bossGate.Transparency = 0.75
	strikePrompt.Enabled = true
	for _, player in ipairs(Players:GetPlayers()) do
		local character = player.Character
		local root = character and character:FindFirstChild("HumanoidRootPart")
		if root then
			root.CFrame = CFrame.new(200, 5, 12)
		end
	end
end

-- Random event loop: every event changes the arena rules for a readable 20 seconds.
local function broadcastEvent(name, duration)
	state.event = name
	state.eventEndsAt = os.clock() + duration
	for _, player in ipairs(Players:GetPlayers()) do
		local ui = player.PlayerGui:FindFirstChild("FactoryHUD")
		if ui then
			ui.Toast.Text = "EVENT: " .. name
			ui.Toast.Visible = true
		end
	end
	task.delay(duration, function()
		if state.event == name then
			state.event = "Warm-up"
		end
	end)
end

task.spawn(function()
	while true do
		task.wait(45)
		local events = {"Banana Rain", "Double Points", "Laser Shuffle", "Tiny Gravity"}
		local chosen = events[math.random(1, #events)]
		broadcastEvent(chosen, 20)
		if chosen == "Banana Rain" then
			for i = 1, 12 do
				local banana = createHazard("FallingBanana", Vector3.new(2, 2, 2), CFrame.new(math.random(35, 220), 28, math.random(-15, 28)), COLORS.orange, 25)
				banana.Shape = Enum.PartType.Ball
				banana.Anchored = false
				banana.AssemblyLinearVelocity = Vector3.new(0, -35, 0)
				Debris:AddItem(banana, 8)
			end
		elseif chosen == "Laser Shuffle" then
			for _, hazard in ipairs(map:GetChildren()) do
				if hazard.Name:match("LaserHazard") then
					hazard.CFrame *= CFrame.Angles(0, math.rad(45), 0)
				end
			end
		elseif chosen == "Tiny Gravity" then
			local oldGravity = workspace.Gravity
			workspace.Gravity = 75
			task.delay(20, function()
				workspace.Gravity = oldGravity
			end)
		end
	end
end)

-- Per-player stats, checkpoint respawn, and a compact HUD.
local function createHud(player)
	local gui = Instance.new("ScreenGui")
	gui.Name = "FactoryHUD"
	gui.ResetOnSpawn = false
	gui.Parent = player:WaitForChild("PlayerGui")

	local panel = Instance.new("Frame")
	panel.Name = "Panel"
	panel.BackgroundColor3 = COLORS.ink
	panel.BackgroundTransparency = 0.15
	panel.Size = UDim2.fromOffset(220, 78)
	panel.Position = UDim2.new(0, 14, 1, -104)
	panel.AnchorPoint = Vector2.new(0, 1)
	panel.Parent = gui
	local corner = Instance.new("UICorner")
	corner.CornerRadius = UDim.new(0, 14)
	corner.Parent = panel

	local status = Instance.new("TextLabel")
	status.Name = "Status"
	status.BackgroundTransparency = 1
	status.Size = UDim2.new(1, -14, 1, -10)
	status.Position = UDim2.fromOffset(7, 5)
	status.Font = Enum.Font.GothamBold
	status.TextColor3 = COLORS.cream
	status.TextXAlignment = Enum.TextXAlignment.Left
	status.TextYAlignment = Enum.TextYAlignment.Top
	status.TextSize = 13
	status.Parent = panel

	local toast = Instance.new("TextLabel")
	toast.Name = "Toast"
	toast.BackgroundColor3 = COLORS.pink
	toast.Size = UDim2.fromOffset(250, 32)
	toast.Position = UDim2.new(0, 18, 1, -58)
	toast.Font = Enum.Font.GothamBlack
	toast.TextColor3 = COLORS.ink
	toast.TextSize = 14
	toast.Visible = false
	toast.Parent = gui
	local toastCorner = Instance.new("UICorner")
	toastCorner.CornerRadius = UDim.new(0, 12)
	toastCorner.Parent = toast

	local function refresh()
		local stats = player:FindFirstChild("leaderstats")
		local points = stats and stats:FindFirstChild("BrainrotPoints")
		local checkpoint = player:GetAttribute("Checkpoint") or 1
		local sparks = player:GetAttribute("FusionSparks") or 0
		local bossText = state.bossAlive and string.format("Boss %d%%", state.bossHealth) or "Boss idle"
		status.Text = string.format(
			"Round %d  |  %d points\nCheckpoint %d/5  |  Sparks %d/3\n%s",
			state.round,
			points and points.Value or 0,
			checkpoint,
			sparks,
			bossText
		)
	end
	task.spawn(function()
		while gui.Parent do
			refresh()
			task.wait(0.25)
		end
	end)
end

Players.PlayerAdded:Connect(function(player)
	local stats = Instance.new("Folder")
	stats.Name = "leaderstats"
	stats.Parent = player
	local points = Instance.new("IntValue")
	points.Name = "BrainrotPoints"
	points.Value = 0
	points.Parent = stats
	player:SetAttribute("Checkpoint", 1)
	player:SetAttribute("FusionSparks", 0)
	createHud(player)
	player.CharacterAdded:Connect(function(character)
		task.wait()
		local root = character:WaitForChild("HumanoidRootPart")
		local checkpoint = CHECKPOINTS[player:GetAttribute("Checkpoint") or 1]
		root.CFrame = CFrame.new(checkpoint.position + Vector3.new(0, 4, 0))
	end)
end)

-- Round pacing keeps the slice replayable: boss, reward, reset, repeat.
task.spawn(function()
	task.wait(45)
	while true do
		startBoss()
		state.event = "Boss fight: strike the Crown!"
		while state.bossAlive do
			task.wait(1)
		end
		task.wait(10)
		state.round += 1
		state.event = "New round: race for more points"
		for _, player in ipairs(Players:GetPlayers()) do
			player:SetAttribute("Checkpoint", 1)
			player:SetAttribute("FusionSparks", 0)
			teleportToCheckpoint(player, 1)
		end
		for _, sparkInfo in ipairs(fusionSparkParts) do
			sparkInfo.part.Transparency = 0
			sparkInfo.prompt.Enabled = true
		end
		task.wait(12)
	end
end)
