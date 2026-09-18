-- Brainrot City Heist - original Roblox prototype
-- Put this single Script in ServerScriptService of a blank Baseplate.
-- It builds a wide, readable city at runtime using only Roblox primitives.

local Players = game:GetService("Players")
local Lighting = game:GetService("Lighting")
local TweenService = game:GetService("TweenService")

local CITY = "BrainrotCityHeist"
local old = workspace:FindFirstChild(CITY)
if old then old:Destroy() end
local city = Instance.new("Folder")
city.Name = CITY
city.Parent = workspace

Lighting.ClockTime = 13
Lighting.Brightness = 1.5
Lighting.Ambient = Color3.fromRGB(125, 135, 155)
Lighting.OutdoorAmbient = Color3.fromRGB(145, 150, 165)
Lighting.EnvironmentDiffuseScale = 0.8
Lighting.EnvironmentSpecularScale = 0.15

local C = {
	road = Color3.fromRGB(52, 58, 70),
	sidewalk = Color3.fromRGB(175, 181, 190),
	grass = Color3.fromRGB(106, 156, 104),
	hub = Color3.fromRGB(52, 123, 151),
	factory = Color3.fromRGB(224, 116, 77),
	canyon = Color3.fromRGB(211, 145, 78),
	bistro = Color3.fromRGB(219, 105, 146),
	boss = Color3.fromRGB(95, 74, 145),
	dark = Color3.fromRGB(35, 39, 52),
	white = Color3.fromRGB(245, 243, 232),
	gold = Color3.fromRGB(235, 190, 65),
	red = Color3.fromRGB(196, 59, 66),
}

local function make(name, size, position, color, material, parent)
	local p = Instance.new("Part")
	p.Name = name
	p.Size = size
	p.Position = position
	p.Color = color
	p.Material = material or Enum.Material.SmoothPlastic
	p.Anchored = true
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	p.Parent = parent or city
	return p
end

local function trim(name, size, position, color, parent)
	local p = make(name, size, position, color, Enum.Material.SmoothPlastic, parent)
	p.CanCollide = false
	return p
end

local function road(name, position, size)
	make(name, size, position, C.road, Enum.Material.Concrete)
end

local function building(name, center, size, wall, roof)
	local model = Instance.new("Model")
	model.Name = name
	model.Parent = city
	make("Body", size, center, wall, Enum.Material.Brick, model)
	make("Roof", Vector3.new(size.X + 2, 1, size.Z + 2),
		center + Vector3.new(0, size.Y / 2 + 0.5, 0), roof, Enum.Material.Metal, model)
	for x = -size.X / 3, size.X / 3, size.X / 3 do
		for z = -size.Z / 2 - 0.06, size.Z / 2 + 0.06, size.Z do
			trim("Window", Vector3.new(3, 3, 0.15),
				center + Vector3.new(x, 2, z), Color3.fromRGB(178, 218, 224), model)
		end
	end
	return model
end

local function fenceLine(name, startPos, length, horizontal, color)
	local count = math.floor(length / 8)
	for i = 0, count do
		local offset = i * 8 - length / 2
		local pos = horizontal and startPos + Vector3.new(offset, 3, 0)
			or startPos + Vector3.new(0, 3, offset)
		make(name .. "_Post", Vector3.new(0.8, 6, 0.8), pos, color, Enum.Material.Metal)
	end
	local size = horizontal and Vector3.new(length, 1, 0.8) or Vector3.new(0.8, 1, length)
	make(name .. "_Rail", size, startPos + Vector3.new(0, 4, 0), color, Enum.Material.Metal)
	make(name .. "_Rail", size, startPos + Vector3.new(0, 1.5, 0), color, Enum.Material.Metal)
end

local function gate(name, position, color)
	local m = Instance.new("Model")
	m.Name = name
	m.Parent = city
	make("Left", Vector3.new(2, 12, 2), position + Vector3.new(-7, 6, 0), color, Enum.Material.Metal, m)
	make("Right", Vector3.new(2, 12, 2), position + Vector3.new(7, 6, 0), color, Enum.Material.Metal, m)
	make("Top", Vector3.new(16, 2, 2), position + Vector3.new(0, 11, 0), color, Enum.Material.Metal, m)
	return m
end

-- Wide city grid: a central hub and four separated districts.
make("Ground", Vector3.new(360, 1, 270), Vector3.new(80, -0.5, 20), C.grass, Enum.Material.Grass)
road("MainEastWest", Vector3.new(80, 0, 20), Vector3.new(340, 0.4, 18))
road("MainNorthSouth", Vector3.new(80, 0, 20), Vector3.new(18, 0.4, 250))
road("FactoryRoad", Vector3.new(80, 0, -92), Vector3.new(150, 0.4, 16))
road("CanyonRoad", Vector3.new(-92, 0, 20), Vector3.new(16, 0.4, 125))
road("BistroRoad", Vector3.new(252, 0, 20), Vector3.new(16, 0.4, 125))
road("BossRoad", Vector3.new(80, 0, 137), Vector3.new(150, 0.4, 16))
make("HubPlaza", Vector3.new(58, 0.6, 58), Vector3.new(80, 0.5, 20), C.hub, Enum.Material.Concrete)
make("HubIsland", Vector3.new(30, 0.8, 30), Vector3.new(80, 1, 20), C.sidewalk, Enum.Material.Marble)
make("SpawnPad", Vector3.new(12, 1, 12), Vector3.new(80, 2, 20), C.gold, Enum.Material.Marble)
local spawn = Instance.new("SpawnLocation")
spawn.Name = "CitySpawn"
spawn.Size = Vector3.new(8, 1, 8)
spawn.Position = Vector3.new(80, 2.8, 20)
spawn.Color = C.gold
spawn.Material = Enum.Material.Marble
spawn.Anchored = true
spawn.Neutral = true
spawn.Parent = city
make("HubCore", Vector3.new(8, 10, 8), Vector3.new(80, 6, 20), C.hub, Enum.Material.SmoothPlastic)
fenceLine("HubBoundary", Vector3.new(80, 3, 49), 58, true, C.white)

-- Neon Factory district (north): large silhouette, catwalks, safe rails.
building("NeonFactory", Vector3.new(80, 17, -116), Vector3.new(92, 32, 48), C.factory, C.dark)
for x = 48, 112, 16 do
	make("Smokestack", Vector3.new(6, 28, 6), Vector3.new(x, 30, -93), C.dark, Enum.Material.Metal)
end
for x = 38, 122, 14 do
	make("FactoryLight", Vector3.new(2, 2, 2), Vector3.new(x, 3, -91), C.gold, Enum.Material.SmoothPlastic)
end
fenceLine("FactoryFence", Vector3.new(80, 3, -143), 110, true, C.factory)
gate("FactoryGate", Vector3.new(80, 0, -90), C.factory)
local factoryConsole = make("FactoryConsole", Vector3.new(4, 3, 3), Vector3.new(80, 3, -82), C.gold, Enum.Material.SmoothPlastic)
for x = 50, 110, 15 do
	local laser = make("FactoryLaser", Vector3.new(2, 2, 8), Vector3.new(x, 4, -83), C.red, Enum.Material.SmoothPlastic)
	laser.CanCollide = false
	laser.Touched:Connect(function(hit)
		local humanoid = hit.Parent and hit.Parent:FindFirstChildOfClass("Humanoid")
		if humanoid then humanoid:TakeDamage(25) end
	end)
end

-- Banana Canyon district (west): broad stepping route, cliff walls and a bridge.
for x = -136, -48, 22 do
	make("CanyonCliff", Vector3.new(16, 18, 18), Vector3.new(x, 9, -42), C.canyon, Enum.Material.Sandstone)
	make("CanyonCliff", Vector3.new(16, 18, 18), Vector3.new(x, 9, 82), C.canyon, Enum.Material.Sandstone)
end
for i = 1, 7 do
	local x = -118 + i * 12
	make("CanyonStep", Vector3.new(9, 1, 12), Vector3.new(x, 2 + (i % 2), 20), C.gold, Enum.Material.WoodPlanks)
end
fenceLine("CanyonNorth", Vector3.new(-92, 3, -32), 110, true, C.canyon)
fenceLine("CanyonSouth", Vector3.new(-92, 3, 72), 110, true, C.canyon)
gate("CanyonGate", Vector3.new(-82, 0, 20), C.canyon)

-- Byte Bistro district (east): recognizable cafe block with a small service yard.
building("ByteBistro", Vector3.new(252, 9, 20), Vector3.new(54, 18, 58), C.bistro, C.gold)
make("BistroAwning", Vector3.new(36, 2, 8), Vector3.new(252, 15, -11), C.gold, Enum.Material.WoodPlanks)
for x = 230, 274, 11 do
	make("Table", Vector3.new(5, 1, 3), Vector3.new(x, 2, -1), C.dark, Enum.Material.WoodPlanks)
end
fenceLine("BistroYard", Vector3.new(252, 3, 55), 62, true, C.bistro)
gate("BistroGate", Vector3.new(252, 0, -12), C.bistro)

-- Boss Arena district (south): open ring with no clutter in the combat lane.
make("ArenaFloor", Vector3.new(100, 0.8, 64), Vector3.new(80, 1, 142), C.boss, Enum.Material.Slate)
fenceLine("ArenaNorth", Vector3.new(80, 4, 109), 104, true, C.white)
fenceLine("ArenaSouth", Vector3.new(80, 4, 175), 104, true, C.white)
gate("ArenaGate", Vector3.new(80, 0, 106), C.boss)
local boss = make("OvercookedCrown", Vector3.new(12, 12, 12), Vector3.new(80, 10, 142), C.gold, Enum.Material.SmoothPlastic)
boss.Shape = Enum.PartType.Ball
make("CrownBand", Vector3.new(16, 2, 4), Vector3.new(80, 17, 142), C.red, Enum.Material.SmoothPlastic)
for _, pos in ipairs({Vector3.new(52, 2, 125), Vector3.new(108, 2, 125),
	Vector3.new(52, 2, 159), Vector3.new(108, 2, 159)}) do
	make("Hotplate", Vector3.new(7, 0.8, 7), pos, C.red, Enum.Material.SmoothPlastic)
end

local checkpoints = {
	Vector3.new(80, 3, 20),
	Vector3.new(80, 3, -90),
	Vector3.new(-82, 3, 20),
	Vector3.new(252, 3, -12),
	Vector3.new(80, 3, 106),
}
for i, pos in ipairs(checkpoints) do
	local pad = make("Checkpoint_" .. i, Vector3.new(8, 0.6, 8), pos, C.gold, Enum.Material.SmoothPlastic)
	pad:SetAttribute("CheckpointIndex", i)
end

local state = { round = 1, bossAlive = false, bossHealth = 100, bossAwarded = {} }
local claims = {}
local checkpointAwards = {}
local promptCooldown = {}

local function active(player)
	return player and player.Parent == Players and player.Character ~= nil
end

local function award(player, amount, reason)
	if not active(player) then return end
	local stats = player:FindFirstChild("leaderstats")
	local points = stats and stats:FindFirstChild("HeistPoints")
	if points then points.Value += amount end
	local gui = player:FindFirstChild("PlayerGui")
	local toast = gui and gui:FindFirstChild("HeistHUD") and gui.HeistHUD:FindFirstChild("Toast")
	if toast then
		toast.Text = string.format("+%d %s", amount, reason)
		toast.Visible = true
		task.delay(1.7, function() if toast.Parent then toast.Visible = false end end)
	end
end

local function playerClaims(player)
	claims[player.UserId] = claims[player.UserId] or {}
	claims[player.UserId][state.round] = claims[player.UserId][state.round] or {}
	return claims[player.UserId][state.round]
end

local function prompt(parent, action, object, callback)
	local p = Instance.new("ProximityPrompt")
	p.ActionText = action
	p.ObjectText = object
	p.HoldDuration = 0.4
	p.MaxActivationDistance = 9
	p.RequiresLineOfSight = true
	p.Parent = parent
	p.Triggered:Connect(function(player)
		if not active(player) then return end
		local key = player.UserId .. ":" .. object
		if os.clock() - (promptCooldown[key] or 0) < 0.5 then return end
		promptCooldown[key] = os.clock()
		callback(player)
	end)
	return p
end

for i, pad in ipairs(city:GetChildren()) do
	local index = pad:GetAttribute("CheckpointIndex")
	if index then
		pad.Touched:Connect(function(hit)
			local player = Players:GetPlayerFromCharacter(hit.Parent)
			if active(player) and (player:GetAttribute("Checkpoint") or 1) < index then
				player:SetAttribute("Checkpoint", index)
				checkpointAwards[player.UserId] = checkpointAwards[player.UserId] or {}
				local key = state.round .. ":" .. index
				if not checkpointAwards[player.UserId][key] then
					checkpointAwards[player.UserId][key] = true
					award(player, 10, "checkpoint")
				end
			end
		end)
	end
end

local function collectible(id, position, amount, label)
	local item = make(id, Vector3.new(3, 3, 3), position, C.gold, Enum.Material.SmoothPlastic)
	item.Shape = Enum.PartType.Ball
	item.Touched:Connect(function(hit)
		local player = Players:GetPlayerFromCharacter(hit.Parent)
		if not active(player) then return end
		local owned = playerClaims(player)
		if not owned[id] then
			owned[id] = true
			award(player, amount, label)
		end
	end)
end

for i = 1, 6 do collectible("Loot_" .. i, Vector3.new(45 + i * 12, 5, -91), 5, "loot") end
for i = 1, 5 do collectible("Fruit_" .. i, Vector3.new(-118 + i * 16, 6, 20), 5, "fruit") end
for i = 1, 3 do collectible("CafeCoin_" .. i, Vector3.new(235 + i * 12, 5, -1), 8, "coin") end

local function createHud(player)
	local gui = Instance.new("ScreenGui")
	gui.Name = "HeistHUD"
	gui.ResetOnSpawn = false
	gui.Parent = player:WaitForChild("PlayerGui")
	local panel = Instance.new("Frame")
	panel.Name = "Panel"
	panel.AnchorPoint = Vector2.new(0, 1)
	panel.Position = UDim2.new(0, 12, 1, -12)
	panel.Size = UDim2.fromOffset(190, 58)
	panel.BackgroundColor3 = C.dark
	panel.BackgroundTransparency = 0.2
	panel.Parent = gui
	local text = Instance.new("TextLabel")
	text.Name = "Status"
	text.BackgroundTransparency = 1
	text.Position = UDim2.fromOffset(8, 6)
	text.Size = UDim2.new(1, -16, 1, -12)
	text.Font = Enum.Font.GothamBold
	text.TextColor3 = C.white
	text.TextSize = 13
	text.TextXAlignment = Enum.TextXAlignment.Left
	text.Parent = panel
	local toast = Instance.new("TextLabel")
	toast.Name = "Toast"
	toast.AnchorPoint = Vector2.new(0.5, 1)
	toast.Position = UDim2.new(0.5, 0, 1, -14)
	toast.Size = UDim2.fromOffset(190, 28)
	toast.BackgroundColor3 = C.gold
	toast.TextColor3 = C.dark
	toast.Font = Enum.Font.GothamBold
	toast.TextSize = 13
	toast.Visible = false
	toast.Parent = gui
	task.spawn(function()
		while gui.Parent do
			local stats = player:FindFirstChild("leaderstats")
			local points = stats and stats:FindFirstChild("HeistPoints")
			text.Text = string.format("Round %d  |  %d points\nCheckpoint %d/5  |  %s",
				state.round, points and points.Value or 0,
				player:GetAttribute("Checkpoint") or 1,
				state.bossAlive and ("Boss " .. state.bossHealth .. "%") or "Explore the city")
			task.wait(0.3)
		end
	end)
end

prompt(city:FindFirstChild("CrownBand"), "Strike", "Overcooked Crown", function(player)
	if not state.bossAlive then return end
	state.bossHealth = math.max(0, state.bossHealth - 10)
	award(player, 2, "hit")
	if state.bossHealth == 0 then
		state.bossAlive = false
		boss.Transparency = 1
		for _, participant in ipairs(Players:GetPlayers()) do
			if state.bossAwarded[participant.UserId] ~= state.round then
				state.bossAwarded[participant.UserId] = state.round
				award(participant, 60, "heist cleared")
			end
		end
	end
end)
prompt(city:FindFirstChild("BistroAwning"), "Serve", "Byte Bistro", function(player)
	if player:GetAttribute("ServedRound") ~= state.round then
		player:SetAttribute("ServedRound", state.round)
		award(player, 15, "served order")
	end
end)
prompt(factoryConsole, "Hack", "Factory Console", function(player)
	if player:GetAttribute("HackedRound") ~= state.round then
		player:SetAttribute("HackedRound", state.round)
		award(player, 15, "console hacked")
	end
end)

Players.PlayerAdded:Connect(function(player)
	local stats = Instance.new("Folder")
	stats.Name = "leaderstats"
	stats.Parent = player
	local points = Instance.new("IntValue")
	points.Name = "HeistPoints"
	points.Parent = stats
	player:SetAttribute("Checkpoint", 1)
	player:SetAttribute("ServedRound", 0)
	player:SetAttribute("HackedRound", 0)
	createHud(player)
	player.CharacterAdded:Connect(function(character)
		local root = character:WaitForChild("HumanoidRootPart")
		local checkpoint = checkpoints[player:GetAttribute("Checkpoint") or 1]
		root.CFrame = CFrame.new(checkpoint + Vector3.new(0, 4, 0))
	end)
end)

Players.PlayerRemoving:Connect(function(player)
	claims[player.UserId] = nil
	checkpointAwards[player.UserId] = nil
	promptCooldown[player.UserId] = nil
end)

task.spawn(function()
	task.wait(35)
	while true do
		state.bossAlive = true
		state.bossHealth = 100 + (state.round - 1) * 20
		state.bossAwarded = {}
		boss.Transparency = 0
		for _, player in ipairs(Players:GetPlayers()) do
			if active(player) then
				local root = player.Character:FindFirstChild("HumanoidRootPart")
				if root then root.CFrame = CFrame.new(80, 5, 106) end
			end
		end
		repeat task.wait(1) until not state.bossAlive
		task.wait(8)
		state.round += 1
		for _, player in ipairs(Players:GetPlayers()) do
			player:SetAttribute("Checkpoint", 1)
			player:SetAttribute("ServedRound", 0)
			player:SetAttribute("HackedRound", 0)
			local root = player.Character and player.Character:FindFirstChild("HumanoidRootPart")
			if root then root.CFrame = CFrame.new(80, 5, 20) end
		end
	end
end)
