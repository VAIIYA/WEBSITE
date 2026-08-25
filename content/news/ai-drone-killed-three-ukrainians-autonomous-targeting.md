---
title: "A Drone Picked Its Own Target and Killed Three People — No Human Involved"
date: "2026-08-24"
excerpt: "A Russian drone that killed three civilians in Ukraine wasn't remote-controlled at the moment it struck — investigators found it used an off-the-shelf AI chip to choose its own target, in what researchers call the first documented civilian death from this kind of fully autonomous weapon."
tags: ["AI", "Autonomous Weapons", "Ukraine War"]
sourceName: "The New York Times"
sourceUrl: "https://www.nytimes.com/2026/08/24/world/europe/russia-drones-autonomous-ai-kill-ukraine-war.html"
---

## The quick version

On July 6, 2026, a Russian attack drone struck a gas station in Zaporizhzhia, Ukraine, killing three civilians: a 19-year-old university student, Tetiana Bubynets, and two men, Oleksiy Svirin and Roman Karpiy. What makes this strike different from thousands of other drone attacks in the war is what Ukrainian investigators found in the wreckage: a small onboard computer that let the drone choose its exact target itself, with no human steering it in the final moments. Researchers say it's the first confirmed case of a civilian death caused by this kind of fully self-targeting weapon.

## What happened

Most military drones in this war are remote-piloted — a human operator watches a video feed and steers the drone to its target in real time, the same way you'd fly a very expensive, very dangerous toy. This drone, a Russian model called the Molniya, worked differently. Human operators sent it toward a general area, but then handed off the final decision — which exact object to hit — to an onboard AI system.

Investigators confirmed this because the wrecked drone had no radio antennas, meaning it physically couldn't have been receiving remote-control signals at the moment of impact. Instead, it was carrying an Nvidia Jetson Orin — a small computer board that developers can buy for a few hundred dollars, similar to the kind hobbyists use for robotics or camera projects, not a piece of specialized military hardware. Ukrainian investigators pulled unencrypted code off the board and found it had been trained to recognize propane tanks — like the ones at the gas station — as a target category. In other words, the drone wasn't told "hit this specific building" by a person; it was shown pictures of propane tanks in training and told, in effect, "find things that look like this and hit them."

Nvidia confirmed to the Times that the chip was genuine but said it doesn't sell directly into Russia — this board reportedly reached Russian weapons makers through third-party resellers, a route that's legal-ish because the chip itself isn't on any export restriction list, even though finished weapons using it obviously would be.

## Why it matters

This isn't the first time this kind of chip has turned up in Russian weapons — it's reportedly the fourth system built around the same Jetson Orin board, after a drone called the V2U, a variant of Russia's Shahed drones, and a cruise missile called the S-71M Monochrome. What makes the Molniya notable is that it's mass-produced rather than a one-off prototype, meaning this style of autonomous targeting isn't a lab experiment anymore — it's being scaled up across a weapon Russia can build in volume.

The core concern researchers and Ukrainian officials are raising isn't really about this one attack — it's about accountability. When a human pilot steers a drone into a target, there's a person who made that choice and can, in principle, be held responsible. When an AI system picks the target based on pattern-matching from training data, that chain of responsibility gets blurry, especially when the system misfires and hits civilians instead of its intended military target.

## What's next

Ukraine is already adapting on the ground: officials say they've strung anti-drone netting across roughly 240 miles of territory and wrapped plastic sheeting around propane tanks specifically to confuse the kind of image-recognition system found in this drone — a low-tech countermeasure to a high-tech problem. A Ukrainian military official, Col. Serhiy Minaiev, put the trajectory bluntly: he expects that within a few years, battlefield conditions will "resemble science fiction films." Whether that pushes toward international rules restricting autonomous targeting, or simply toward both sides racing to build more of it, is the open question this single, tragic strike has put back on the table.
