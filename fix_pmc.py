import pathlib
p = pathlib.Path("src/app/api/providers/[id]/models/discovery/providerModelsConfig.ts")
s = p.read_text()
# Both sides are independent additive blocks -> union in order (ours, then theirs).
if "<<<<<<<" in s:
    head, rest = s.split("<<<<<<< HEAD\n", 1)
    ours, rest = rest.split("=======\n", 1)
    theirs, tail = rest.split(">>>>>>> origin/release/v3.8.51\n", 1)
    s = head + ours + theirs + tail
p.write_text(s)
left = s.count("<<<<<<<") + s.count(">>>>>>>")
print("remaining markers:", left)
assert left == 0
# sanity: both sides' symbols must exist
for sym in ("buildOpencodeModelsDiscoveryEntry", "XAI_MODELS_CONFIG",
            "getXaiOauthLiveModelsConfig", "isFeatureFlagEnabled",
            "buildOpencodeBackgroundHeaders"):
    assert sym in s, f"MISSING {sym}"
    print(f"ok: {sym}")
