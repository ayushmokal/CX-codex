// CodeX Content Data
const contentData = {
    'blood-vision': {
        title: 'Blood Vision Documentation',
        content: `
            <h3>Blood Vision General FAQ</h3>
            <h4>What is Blood Vision?</h4>
            <p>Our newest product, Blood Vision - powered by UltraTrace™ technology allows seamless correlation to the changes in your sleep, resting HR, HRV, and movement trends with pertinent markers in the blood. Decades of meticulous research underpin this categorisation.</p>

            <h4>What you need to know about booking a Blood Vision Test</h4>
            <p>You can book your Blood Vision Test via the Ultrahuman app. You can also book a test for your friends and family here. All available test packages are visible in the app's vision tab.</p>

            <h4>Is my location serviceable?</h4>
            <p>We are live in select cities in India - Bengaluru, Gurgaon, Delhi, Hyderabad, Mumbai & Noida.</p>

            <h4>What are the different tests available?</h4>
            <p>We have 14 tests available: Peak Performance, Foundational, Advanced, Hormone Health, Organ Health, Diabetes Risk, Heart Health, Cognition Health, Inflammation Status, Recovery Panel, Fatigue, Hair Health, Sleep Status, Menstrual Health (female only)</p>

            <h4>Who comes to collect the samples?</h4>
            <p>We have exclusively tied up with Orange Health Labs, our partners in fulfilling the Blood Vision Tests. Their collection partners enable sample collections to be carried out from the comfort of your home.</p>

            <h3>Blood Vision USA FAQ</h3>
            <h4>What is Blood Vision?</h4>
            <p>Blood Vision is our newest product, powered by UltraTrace™ technology. It helps you understand the connections between your lifestyle habits and important markers in your blood.</p>

            <h4>Do I need a doctor's prescription to use Blood Vision?</h4>
            <p>No, you do not need your own doctor's prescription. Our service includes physician authorization.</p>

            <h4>How do I order a Blood Vision test?</h4>
            <p>You can purchase a Blood Vision test through the Ultrahuman app or the Blood Vision website. Upon purchase, an order is generated and routed to our B2B partner, Vital/Junction.</p>

            <h4>Is Blood Vision available in my location?</h4>
            <p>Blood Vision aims to cover all zip codes in the US through its lab partners (Quest Diagnostics, Labcorp) and mobile phlebotomy providers.</p>

            <h3>Blood Vision USA SOPs</h3>
            <h4>Pre-Test Scenarios</h4>
            <h5>Phlebotomist Not Showing Up (No-Show)</h5>
            <p>Action: Empathize & Apologize, Gather Details, Immediate Escalation to Vital operations, Prioritize Reschedule, Consider Service Recovery.</p>

            <h5>Late Arrival</h5>
            <p>Action: Empathize & Apologize, Assess Severity (Minor vs Significant Delay), Service Recovery for significant delays.</p>

            <h5>Rescheduling (User-Initiated)</h5>
            <p>Policy: >24 Hours: Free reschedule, <24 Hours: Full appointment fee charged.</p>

            <h4>During Test Scenarios</h4>
            <h5>Excessive Bleeding</h5>
            <p>Phlebotomist handles first aid, Blood Vision support calls 911 if severe.</p>

            <h5>Anxiety Response</h5>
            <p>Phlebotomist trained to handle vasovagal episodes, recommend lying down for future draws.</p>

            <h4>Post-Test Scenarios</h4>
            <h5>Bruising at Draw Site</h5>
            <p>Normal occurrence, advise warm compresses after 24 hours.</p>

            <h5>Report Delays</h5>
            <p>Expected turnaround: Standard panels ~5-10 business days, comprehensive/specialized tests possibly 2+ weeks.</p>
        `
    },
    'm1-sensor': {
        title: 'M1 Sensor Documentation',
        content: `
            <h3>Ultrahuman M1 Overview</h3>
            <p>The Ultrahuman M1 is a wearable glucose monitoring system designed to help users optimize their metabolic health. It works by continuously measuring glucose levels from the interstitial fluid using a CGM sensor.</p>

            <h4>How It Works</h4>
            <p>The device uses a tiny filament inserted just under the skin (painlessly, for most people). It tracks your glucose levels 24/7, updating every few minutes. You scan the sensor with your phone to retrieve the data.</p>

            <h4>Types Of Sensors & Regions</h4>
            <table>
                <tr><th>Region</th><th>Sensor Type</th><th>Scan Needed?</th><th>Live Updates?</th></tr>
                <tr><td>India</td><td>Libre 1 & Libre Pro</td><td>Yes</td><td>No</td></tr>
                <tr><td>EU/UK</td><td>Libre 2</td><td>Yes</td><td>Limited</td></tr>
                <tr><td>UAE</td><td>Libre 2</td><td>Yes</td><td>Limited</td></tr>
                <tr><td>USA</td><td>Libre 3 Plus</td><td>No</td><td>Yes</td></tr>
            </table>

            <h3>M1 Lite</h3>
            <h4>Key Features</h4>
            <ul>
                <li>Bring Your Own Sensor: Utilize your existing compatible Abbott sensors</li>
                <li>Advanced Metabolic Insights: Metabolic Score, Food Score, Glucose Trends</li>
                <li>Integration with Ultrahuman Ring AIR</li>
            </ul>

            <h4>Regional Compatibility</h4>
            <ul>
                <li>India: FreeStyle Libre and Libre Pro sensors</li>
                <li>Europe: FreeStyle Libre 2 sensors</li>
                <li>USA: FreeStyle Libre 3 Plus sensors</li>
            </ul>

            <h3>Common Issues & Solutions</h3>
            <h4>Invalid Readings</h4>
            <p>CGM stints showing critically low (<40) or very high (>400) values. Replace sensor if continuous for 6+ hours.</p>

            <h4>Failed To Start</h4>
            <p>Sensor age not firing up from 0, or "NotActivated". Replace after 2-3 countdown attempts.</p>

            <h4>Baseline Issues</h4>
            <p>Readings too high/low. Use manual calibration with glucometer reading.</p>

            <h4>Unable To Scan</h4>
            <p>Phone restart, toggle NFC, check for phone case interference.</p>

            <h4>Multiple Accounts Scan</h4>
            <p>Filter by sensor UID to identify which email was used initially.</p>

            <h4>Applicator Fail</h4>
            <p>Sensor doesn't release from applicator. Ask for photos and replace.</p>

            <h4>Sensor Discomfort</h4>
            <p>Rashes, swelling, pain. Rate pain 1-10, offer replacement for 7-10 range.</p>

            <h3>Debugging M1 Issues</h3>
            <h4>Invalid Readings</h4>
            <p>What it looks like: Reading stuck on same value. Solution: Replace if continuous for 6+ hours.</p>

            <h4>Failed To Start</h4>
            <p>Sensor keeps showing 60-minute countdown. Replace after 2-3 attempts.</p>

            <h4>Baseline Issues</h4>
            <p>User reports readings too low/high. Calibrate using glucometer reference.</p>

            <h4>Unable To Scan</h4>
            <p>iOS: Check NFC location. Android: Toggle NFC, remove case.</p>

            <h4>Multiple Accounts Scan</h4>
            <p>Age starts from number >0. Migrate sensor to correct email.</p>

            <h4>Applicator Fail</h4>
            <p>Pin missing or sensor stuck. Replace immediately.</p>

            <h4>Sensor Discomfort Cases</h4>
            <p>Rate pain 1-10. Replace for severe cases (7-10).</p>

            <h4>M1 Live Missing Data/Frequent Disconnection</h4>
            <p>Ensure Bluetooth and background sync enabled. Check app permissions.</p>

            <h4>Non-Live Sensor Missing Data</h4>
            <p>Scan at least once every 8 hours for non-live sensors.</p>

            <h4>Sensor Knock-Off Cases</h4>
            <p>Replace if user has UHX. Non-UHX users cannot get replacement.</p>

            <h4>Whitelisting</h4>
            <p>For external sensors in Europe. Mark sensor as "M1 live" in CGM Stints.</p>

            <h4>US M1 Sync Issues</h4>
            <p>Libre 3 Plus data flows: Sensor > Libre 3 Plus app > Terra > Ultrahuman app.</p>

            <h3>Knowledge Tree</h3>
            <p>tag (topic + issue)TopicIssueProtocol</p>
            <p>sensor_scan_not_working Sensor Sensor fails to successfully scan and enter the 60 min warm up stage This is a possible NFC not working situation. Three troubleshooting techniques we go for - a) Restarting the phone b) Uninstalling and reinstalling the app c) Logging out and logging in If the user is on an iPhone, simply asking them the iPhone works. If the NFC issue persists, request the user to check with family/friends for an NFC enabled phone. The start once they successfully activate their sensor worries there. Also, the sensor stores data for if there's anyone's phone that they could use once every 7 hours, that would do it. The user be logged in from multiple devices using the same details, so they can monitor from their phone make all the necessary inputs and just use the friends/family phone for scanning. Some quirky pointers - If the user is using a Samsung phone, ask them to off their case and use the back side of their phone scan the sensor. Sometimes the case's thickness the NFC from working properly. There seems to be some problem with OnePlus phone's NFC. Just confirm the phone model or proceeding with troubleshooting problems.</p>
            <p>sensor_invalid_readings Sensor Sensor is reporting invalid readings (≤40 or ≥500) for over 6-8 hours. Readings less than 40 and higher than 500 considered invalid readings. Check this data on Stints place of the Ops Dash. If invalid readings persist for over 6 hours, replace. If the user is in the first 24 hours, we ask them for the first 24 hour window.</p>
            <p>sensor_invalid_reading_midway Sensor Cyborgs graph isn't updating upon scanning/stuck at the same value Check 'CGM Stints/Lifetime Data' on the ops dashboard. Look for readings below 40 or above If it's Day 1 on the sensor, let the user know sensor takes 24 hours to calibrate. If it's past Day 1 and the sensor has been replaced invalid readings for over 6-8 hours, process a replacement.</p>
    'ring-air': {
        title: 'Ring AIR Documentation',
        content: `
            <div class="ring-air-embed">
                <div class="ring-air-embed__intro">
                    <h3>Ultrahuman Ring AIR Knowledge Base</h3>
                    <p>The full Ultra-CX Bible export for Ring AIR is embedded below so every section from the screenshots&mdash;product overview, sizing, circadian rhythm guidance, app walkthroughs, battery wizard, and referral flows&mdash;is available with the exact copy, images, and attachments.</p>
                    <ul class="ring-air-embed__highlights">
                        <li>Product overview, key features, box contents, and colorways</li>
                        <li>App walkthrough + metrics, biomarker explainers, and circadian rhythm playbooks</li>
                        <li>Battery Health Wizard, troubleshooting flows, sizing charts, and referral guides</li>
                    </ul>
                </div>
                <iframe
                    src="G%20Docs/Updated/The%20Ultra-CX%20Bible%201b2755317a9180dc8e17f8951755fa44.html#1b475531-7a91-80bf-b030-dfc7188425fd"
                    title="Ultrahuman Ring AIR CX Bible"
                    loading="lazy">
                </iframe>
            </div>
        `
    },
    'powerplug': {
        title: 'PowerPlug Documentation',
        content: `
            <h3>PowerPlug Overview</h3>
            <p>Ultrahuman PowerPlugs are individual apps and plugins built on top of Ultrahuman's health data stack. They enable personalized health insights.</p>

            <h4>Available PowerPlugs</h4>
            <ul>
                <li>Circadian Rhythm</li>
                <li>Pregnancy Insights</li>
                <li>Cycle Tracking</li>
                <li>Cycle and Ovulation Pro</li>
                <li>Caffeine Window</li>
                <li>Vitamin D</li>
                <li>Social Jet Lag</li>
                <li>AFib Detection</li>
                <li>Weight Loss</li>
                <li>Ovulation (Coming Soon)</li>
                <li>Cardio Adaptability</li>
                <li>TeslaSync</li>
                <li>Screen time</li>
            </ul>

            <h4>Free vs Premium</h4>
            <ul>
                <li><strong>Free:</strong> Vitamin D, Cycle Tracking, Pregnancy Insights, Circadian Alignment, Caffeine Window</li>
                <li><strong>Premium:</strong> AFib Detection, Cardio Adaptability</li>
            </ul>

            <h3>Specific PowerPlug FAQs</h3>
            <h4>AFib Detection</h4>
            <p>Monitors nocturnal heart rhythm for early signs of Atrial Fibrillation. Available in Australia, Europe, Singapore, UAE, UK, Saudi Arabia.</p>

            <h4>Circadian Rhythm</h4>
            <p>Provides personalized recommendations for light exposure, exercise, and wind down times based on your natural circadian clock.</p>

            <h4>Caffeine Window</h4>
            <p>Optimizes caffeine consumption timing based on your sleep patterns and daily routines.</p>

            <h4>Vitamin D</h4>
            <p>Calculates optimal sun exposure times based on skin type, location, and UV index.</p>

            <h4>Cycle Tracking</h4>
            <p>Comprehensive menstrual cycle overview with fertility windows and symptom patterns.</p>

            <h4>Ovulation</h4>
            <p>Helps identify fertile days and monitor menstrual health.</p>

            <h4>Pregnancy Mode</h4>
            <p>Tracks sleep patterns, movement, HR, HRV, temperature for each trimester.</p>

            <h4>Jet Lag</h4>
            <p>Personalized plans for adjusting to new time zones using light exposure, melatonin, caffeine, and naps.</p>

            <h4>Weight Loss</h4>
            <p>Integrates meal planning with glucose monitoring and automated food logging.</p>

            <h4>Cardio Adaptability</h4>
            <p>Assesses heart's ability to adjust to varying physical demands. Provides nightly reports on cardiovascular trends.</p>

            <h3>Technical Requirements</h3>
            <h4>Device Compatibility</h4>
            <ul>
                <li>iOS: 15.0 or newer</li>
                <li>Android: 6.0 or newer</li>
            </ul>

            <h4>Location Permissions</h4>
            <p>Required for Vitamin D PowerPlug to calculate UV exposure based on location.</p>

            <h4>Background Sync</h4>
            <p>Necessary for continuous data collection, especially for AFib and Cardio Adaptability.</p>

            <h3>Subscription & Billing</h3>
            <h4>Trial Period</h4>
            <ul>
                <li>Yearly subscription: 7 days free trial</li>
                <li>Monthly subscription: 3 days free trial</li>
            </ul>

            <h4>Cancellation</h4>
            <p>Cancel through app store settings. Refunds processed according to platform policies.</p>

            <h3>Common Issues</h3>
            <h4>Data Not Syncing</h4>
            <p>Check internet connection, app permissions, and background sync settings.</p>

            <h4>Inaccurate Readings</h4>
            <p>Ensure proper ring fit and consistent wear patterns.</p>

            <h4>Subscription Not Activating</h4>
            <p>Check payment method and app store account status.</p>

            <h3>Menstrual Cycle: Basics</h3>
            <p>A menstrual cycle is measured from the first day of your period to the day before your next period.</p>
            <p>The average length of a menstrual cycle is 28 days, but everyone's cycle is different. For example, teenagers might have cycles that last 45 days, whereas people in their 20s to 30s might have cycles that last 21 to 38 days.</p>
            <p>NOTE: Cycle length and period length are 2 different things.</p>
            <p>The menstrual cycle has 4 phases:</p>
            <ol>
                <li>Menstrual Phase: This is when women have a period. The uterus lining sheds and flows out of the vagina. The period contains blood, mucus and some cells from the lining of the uterus. The average length of a period is 3 to 7 days.</li>
                <li>Follicular phase: This phase starts on the first day of the period and lasts for 13 to 14 days. Changing hormone levels cause the lining of the uterus to thicken and follicles to grow on the surface of the ovaries. Usually only one follicle will mature into an egg.</li>
                <li>Ovulation phase: This is when a mature egg is released from an ovary. This usually happens once a month, about 2 weeks before the next period. This is also the time when the chances of getting pregnant are the highest.</li>
                <li>Luteal phase: In this phase, the egg travels through the fallopian tubes to the uterus. The uterus lining continues to thicken in preparation for pregnancy. In case one gets pregnant, they won't have a period, otherwise they will have a period and the menstrual cycle will start over again. (14 days)</li>
            </ol>

            <h3>Body Parameters and how they vary during a cycle</h3>
            <table>
                <tr><th>FACTOR</th><th>MENSTRUAL PHASE</th><th>OVULATORY PHASE</th><th>LUTEAL PHASE</th></tr>
                <tr><td>Core body temperature</td><td>Decreases</td><td>Starts to increase</td><td>Further increases and remains high till next period</td></tr>
                <tr><td>HRV</td><td>Increases</td><td>Further increases</td><td>Decreases</td></tr>
                <tr><td>Resting HR</td><td>Decreases</td><td>Inconclusive</td><td>Mild increase</td></tr>
                <tr><td>HR</td><td>Decreases</td><td>Increases</td><td>Further increases</td></tr>
                <tr><td>RR</td><td>Decreases</td><td>Further decreases</td><td>Mild increase</td></tr>
                <tr><td>Skin perfusion</td><td>Higher</td><td>Lower</td><td>Inconclusive</td></tr>
            </table>

            <h4>MENSTRUAL PHASE:</h4>
            <p>Core body temperature, RHR and RR ⬇</p>
            <p>HR ⬇ compared to other phases</p>
            <p>HRV, Skin perfusion ⬆</p>

            <h4>OVULATORY PHASE:</h4>
            <p>Core body temperature starts to ⬆</p>
            <p>HRV and HR further ⬆</p>
            <p>RR and skin perfusion ⬇</p>
            <p>RHR inconclusive</p>

            <h4>LUTEAL PHASE:</h4>
            <p>Core body temperature, RHR, HR and RR ⬆</p>
            <p>HRV ⬇</p>

            <h3>App Onboarding</h3>
            <p>Users are prompted to integrate and import their cycle data from a third party app (if any), input their primary goal for using this powerplug, period length, cycle regularity, cycle length, period dates, health conditions (if any) and any birth control used in the last 6 months.</p>

            <h3>Integrations</h3>
            <ul>
                <li>We only import period start and end dates from the integrated apps.</li>
                <li>As soon as the user integrates the two apps, the data should sync immediately.</li>
                <li>For the users facing issues logging in their Clue app, flag the cases to Terra on this thread.</li>
                <li>Once the cycle data has been imported into UH from the integrated apps, further changes to the data on the third party app won't change the data in UH. Also, any changes made to the data by the user on UH won't be written back to the integrated app.</li>
            </ul>

            <h3>Cycle tracking: Tracking for basic cycle health</h3>
            <h4>Input parameters:</h4>
            <ol>
                <li>period_ranges: A list of period ranges, each containing: Start date of a period, End date of the same period</li>
                <li>last_cycle_length: Integer representing the length of the most recent cycle (for irregular cycles)</li>
                <li>typical_cycle_length: Integer representing the typical cycle length (for regular cycles)</li>
            </ol>
            <h4>How algo works:</h4>
            <p>Take last cycle_start_date > Add typical_cycle_length (for regular cycles) or last_cycle_length (for irregular cycles) to it > You get predicted_cycle_start_date of the next cycle > Take difference of last cycle_end_date and cycle_start_date to get cycle duration > Add to predicted_cycle_start_date to get predicted_cycle_end_date</p>
            <p>NOTE: Current algo assumes future cycles will resemble past cycles and doesn't account for external factors that might affect the cycles (like stress, medication, health conditions, etc)</p>
            <h4>At any given time, the user would have to be in one of the 6 states:</h4>
            <ol>
                <li>Menstrual phase: When the user is in their logged menstrual stage (banner shows period start and calculated end dates)</li>
                <li>Follicular phase: The phase between menstrual and ovulation phases (banner shows next predicted period dates)</li>
                <li>Ovulation phase: When the user is in their ovulation phase (banner shows next predicted period dates)</li>
                <li>Luteal phase: Phase between ovulation and predicted menstrual phase dates (banner shows next predicted period dates)</li>
                <li>Predicted menstrual phase: Menstrual dates predicted by the algo (banner shows the current predicted dates)</li>
                <li>Unconfirmed phase: If user hasn't logged their periods even after 7 days have passed past the predicted menstrual phase dates (no banner shown)</li>
            </ol>
            <p>NOTE: At the moment there's a bug in the algo whereby the user's max cycle length gets capped to 30 days once they start using the PP. This isn't an issue for the regular cyclers but for irregular ones, this can result in app showing unconfirmed phase until they log in their next cycle dates.</p>
            <h4>The powerplug remains 'in calibration' mode until the following criterias are met:</h4>
            <ol>
                <li>At least 3 cycle start dates</li>
                <li>At least 50% biomarker data for those cycles</li>
                <li>BMI ≤28, age is ≤ 40</li>
            </ol>

            <h3>Tracking to get pregnant</h3>
            <h4>Definitions:</h4>
            <ol>
                <li>Fertile window: 5 days before ovulation day, ovulation day and one day after ovulation day. So, 7 days in total.</li>
                <li>Outside fertile window: Any day that's outside the above defined fertile window duration.</li>
                <li>Approaching fertile window: The day after the period ends up until the start of the fertile window.</li>
            </ol>
            <h4>How algo works:</h4>
            <p>Divided into 3 phases:</p>
            <ol>
                <li>Phase 1: From start of menses upto <40% of cycle duration. Uses past data (cycle start date+biomarkers) to predict fertile window</li>
                <li>Phase 2: Fertile window (>40% to 70% of cycle duration+5 days) Biomarker algo kicks in and predicts new fertile window (only if enough biomarker data is present)</li>
                <li>Phase 3: From 5 days past 70% of cycle duration up until the next period start date Uses past data to calculate next fertile window</li>
            </ol>
            <p>The predicted ovulation window is determined by anchoring to your period start date and detecting a biosignature pattern from your temperature, resting heart rate (RHR), and heart rate variability (HRV). As the cycle advances, additional data improves the algorithm's accuracy in detecting the biosignature. This can sometimes shift the predicted ovulation window, especially because we're forecasting the window in real-time, during the cycle itself.</p>
            <p>NOTE (1): Even 1 day of inaccurate data can affect C&O forecasts. However, we use a 3 day rolling window for data prediction, hence, the user will start seeing major shifts in their fertile window predictions if the data remains inaccurate for 3 days continuously.</p>
            <p>NOTE(2): The temperature deviation shown in the powerplug tile is different from the skin temperature deviation captured on the home page of the app. This is because we use a 30 day rolling baseline for the calculation of temp deviation for C&O powerplug.</p>

            <h3>Women's Health Dashboard</h3>
            <h4>Cycle Tracking Configs Dashboard:</h4>
            <p>This dashboard gives all the details filled by the user while onboarding into their Cycle & Ovulation Powerplug</p>
            <h4>Menstrual Cycles Dashboard:</h4>
            <p>This dashboard shows all of the cycles and their data tracked by the user along with the predicted cycle dates computed by our algorithm.</p>
            <p>NOTE: We use this dashboard only to check cycle data and other onboarding details filled by the user. This is intended to give a complete overview of the data being shown to the user on their app.</p>

            <h3>Troubleshooting</h3>
            <p>NOTE: To troubleshoot any technical issue with the user's powerplug, updating their ring's firmware, resets or making them re-onboard the powerplug is not going to help. We would have to flag it to the tech team.</p>
            <ul>
                <li>User feels their ovulation dates predicted by the app aren't correct: Troubleshooting: Currently its not possible to input/log/correct ovulation day that is predicted by the system. But this is an enhancement planned in the next version for April.</li>
                <li>Users complain that their predicted period days aren't correct: Troubleshooting: They can always "log" their period by tapping the calendar icon on the top right next to the edit cycle details button and we'll revise that to recalculate their phases.</li>
                <li>The user feels there are days where their temperature has not been recorded (in cycle tracking): When deviation from the recorded baseline is very close to 0, there are no bars shown on the graph. We're working on improvements to the feature so that this is clear going forward. (Currently may also show as "- -" on a given day, on the app)</li>
                <li>Users complain that they are seeing the 'in calibration' banner even after logging in past 3 cycles data and wearing the ring continuously: Troubleshooting: We show the "In calibration" if we can't come up with a fertility high confidence. This high confidence is decided on some factors as described.</li>
                <li>User notices that predicted ovulation window changes on a given day: We predict the ovulation window for a user based on 3 biomarkers (temperature deviation, RHR and HRV) - hence, if on any day we find that these biomarkers are more (or less) suggestive towards a certain day, the algorithm will change basis the stronger suggestive biomarker pattern. Hence, the predicted ovulation window may dynamically change.</li>
                <li>Users complain that the temperature being shown in their sleep index section and the one being shown inside the powerplug are different: Troubleshooting: For the temperature you see on the Sleep Index details page, we calculate it by excluding nap sleep. This gives you an average skin temperature during your main sleep period, without naps affecting the value. However, the skin temperature in the Cycle Tracking details page is pulled from your baseline temperature, which includes all temp data within sleep boundaries—naps included. Hence, the difference.</li>
            </ul>

            <h3>WIP</h3>
            <ul>
                <li>Expanding period logging limits from the current min 3 and max 10 days capability.</li>
                <li>Handling non bleeding users</li>
                <li>Non-bleeding users: "Amenorrhea," or the absence of menstruation, can be normal during certain periods like before puberty, during pregnancy or breastfeeding, or after menopause, but can also be a sign of various medical conditions or lifestyle factors.</li>
                <li>SPOTTING: Spotting refers to light vaginal bleeding that occurs outside of your regular menstrual period. Spotting can have various causes, including hormonal fluctuations, ovulation, birth control methods, pregnancy (implantation bleeding), or even certain medical conditions. Spotting is lighter and less prolonged than a regular period, and it usually doesn't require the use of pads or tampons.</li>
                <li>Make provision to input LH result</li>
                <li>Increase temp data to upto 2 decimal places.</li>
                <li>Freezing ovulation prediction beyond a certain point of time and not letting it keep shifting.</li>
                <li>And many more...</li>
            </ul>
            <p>Specific improvements we're working on to address some of the issues over the next few weeks:</p>
            <ol>
                <li>Stabilizing the ovulation window — Once a high-probability ovulation window is identified, we'll prevent multiple shifts later in the same cycle.</li>
                <li>Marking ovulation day — You'll be able to manually mark your ovulation day to refine predictions and improve future accuracy.</li>
                <li>Bug fixes for irregular cycles — We're fixing issues that impact predictions for users with irregular cycle lengths.</li>
            </ol>
        `
    },
    'ultrahuman-home': {
        title: 'Ultrahuman Home Documentation',
        content: `
            <h3>Ultrahuman Home Overview</h3>
            <p>The future of healthy living - Ultrahuman Home is a comprehensive home health monitoring device that tracks environmental factors affecting your well-being.</p>

            <h4>What's Included</h4>
            <ul>
                <li>Ultrahuman Home device</li>
                <li>USB-C cable for power</li>
                <li>Notecard with message</li>
                <li>Product brochure</li>
            </ul>

            <h4>Key Features</h4>
            <ul>
                <li>Temperature monitoring</li>
                <li>Humidity tracking</li>
                <li>Particulate matter detection</li>
                <li>Noise level measurement</li>
                <li>Smoke detection</li>
                <li>Blue light monitoring</li>
                <li>UV light assessment</li>
            </ul>

            <h3>Technical Specifications</h3>
            <h4>Device Requirements</h4>
            <ul>
                <li>iOS: 15.0 or newer</li>
                <li>Android: 6.0 or newer</li>
            </ul>

            <h4>Connectivity</h4>
            <ul>
                <li>Wi-Fi range: Up to 20 feet</li>
                <li>Bluetooth range: Up to 8 feet</li>
            </ul>

            <h4>Power Consumption</h4>
            <p>2 Watts of power consumption</p>

            <h4>Coverage Area</h4>
            <p>Approximately 500 square feet per device</p>

            <h3>Sensors & Accuracy</h3>
            <h4>Sensor Array</h4>
            <ul>
                <li>Temperature sensors</li>
                <li>Humidity sensors</li>
                <li>Particulate matter sensors</li>
                <li>Precision microphones</li>
                <li>Natural light sensors</li>
                <li>UV sensors</li>
                <li>Blue light sensors</li>
                <li>Infrared sensor (for mapping)</li>
            </ul>

            <h4>Data Accuracy</h4>
            <p>Calibrated against industry-standard devices with rigorous quality checks.</p>

            <h3>Setup & Usage</h3>
            <h4>Optimal Placement</h4>
            <p>Install in bedroom and spaces where you spend most time for best insights.</p>

            <h4>Multi-User Access</h4>
            <p>Up to 10 people can access data simultaneously through cloud sharing.</p>

            <h4>Data Storage</h4>
            <p>Device stores data for up to 15 days, with cloud backup available.</p>

            <h3>Health Insights</h3>
            <h4>Sleep Quality Improvement</h4>
            <ul>
                <li>Temperature regulation</li>
                <li>Humidity control</li>
                <li>Noise reduction</li>
                <li>Blue light management</li>
            </ul>

            <h4>Air Quality Monitoring</h4>
            <ul>
                <li>PM1, PM2.5, PM10 detection</li>
                <li>CO and CO2 monitoring</li>
                <li>Pollutants: Pollen, particulate matter</li>
            </ul>

            <h4>Circadian Rhythm Support</h4>
            <ul>
                <li>UV light exposure tracking</li>
                <li>Blue light management</li>
                <li>Natural light optimization</li>
            </ul>

            <h3>Smart Integrations</h3>
            <h4>IFTTT Compatibility</h4>
            <p>Seamlessly syncs with smart home devices via IFTTT protocols.</p>

            <h4>Apple HomeKit</h4>
            <p>Compatible with Apple HomeKit and Thread protocol devices.</p>

            <h4>Automation Examples</h4>
            <ul>
                <li>Air quality triggers air purifier</li>
                <li>Humidity levels control humidifiers</li>
                <li>Temperature adjustments for optimal sleep</li>
            </ul>

            <h3>Privacy & Security</h3>
            <h4>Microphone Privacy</h4>
            <p>All audio processing conducted locally. Physical mic cut-off button for control.</p>

            <h4>Data Security</h4>
            <p>EMF emissions comparable to standard household devices.</p>

            <h4>Safety</h4>
            <p>Safe for pregnant women, children, and all household members.</p>

            <h3>Purchase & Support</h3>
            <h4>Availability</h4>
            <p>Available for purchase on the Ultrahuman website.</p>

            <h4>Shipping</h4>
            <p>Ships within 5-7 business days.</p>

            <h4>Warranty</h4>
            <ul>
                <li>30-day return policy</li>
                <li>12-month warranty covering electronics and sensors</li>
            </ul>

            <h4>Customs & Taxes</h4>
            <p>Additional costs may apply for international shipping.</p>

            <h3>Troubleshooting</h3>
            <h4>Connection Issues</h4>
            <ul>
                <li>Check Wi-Fi/Bluetooth range</li>
                <li>Verify device compatibility</li>
                <li>Restart device and app</li>
            </ul>

            <h4>Data Sync Problems</h4>
            <ul>
                <li>Ensure stable internet connection</li>
                <li>Check app permissions</li>
                <li>Verify cloud sync settings</li>
            </ul>

            <h4>Accuracy Concerns</h4>
            <ul>
                <li>Calibrate sensors if needed</li>
                <li>Check for environmental interference</li>
                <li>Contact support for advanced diagnostics</li>
            </ul>
        `
    },
    'sops': {
        title: 'SOPs & Procedures Documentation',
        content: `
            <h3>Chat Handling & Flagging SOP</h3>
            <h4>Objective</h4>
            <p>To outline standardized procedures for handling support chat interactions, ensuring high-quality and consistent support via Yellow.AI.</p>

            <h4>Holding Message</h4>
            <p class="highlight">"After carefully reviewing your issue, we've determined that it needs to be escalated to our internal team for a thorough check. We've raised it with the concerned team, and typically this process takes less than 48 hours. In rare cases, it may take up to 72 hours. Please rest assured—we'll keep this chat open and update you as soon as we have a resolution."</p>

            <h4>Flagging Process</h4>
            <ol>
                <li>Decide issue needs escalation</li>
                <li>Paste flagged URL in [Details > "Flagged Link"]</li>
                <li>Send Holding message</li>
                <li>Change status to ON-HOLD (emails) or assign to FLAGGED QUEUE (chats)</li>
            </ol>

            <h4>Resolution Scenarios</h4>
            <table>
                <tr><th>Scenario</th><th>Mark as Resolved</th><th>Flag</th></tr>
                <tr><td>Issue fully solved, user confirmed</td><td>✅</td><td>❌</td></tr>
                <tr><td>Feedback/feature request shared</td><td>✅</td><td>❌</td></tr>
                <tr><td>Refund/replacement processed</td><td>✅</td><td>❌</td></tr>
                <tr><td>Waiting for user reply after partial solution</td><td>❌</td><td>❌</td></tr>
                <tr><td>Distress from ring causing injury</td><td>❌</td><td>✅</td></tr>
                <tr><td>Bug/tech issue pending internal fix</td><td>❌</td><td>✅</td></tr>
                <tr><td>Transaction/refund issues needing finance review</td><td>❌</td><td>✅</td></tr>
                <tr><td>Ops issues (ETA, customs, lost packages)</td><td>❌</td><td>✅</td></tr>
            </table>

            <h3>Flagging Guidelines</h3>
            <h4>Ops Team Flagging</h4>
            <ul>
                <li>ETA/expedite requests</li>
                <li>Customs issues</li>
                <li>Address/SKU changes</li>
                <li>Order-related concerns</li>
            </ul>

            <h4>Finance Team Flagging</h4>
            <ul>
                <li>PayPal refunds</li>
                <li>Bank transfers</li>
                <li>GST/Business Invoice generation</li>
                <li>Refund issues</li>
            </ul>

            <h4>Tech Team Flagging</h4>
            <ul>
                <li>Firmware issues</li>
                <li>App errors</li>
                <li>Unusual ring problems</li>
            </ul>

            <h3>Tagging SOP</h3>
            <h4>Flag Tags</h4>
            <ul>
                <li>Flagged_Tech - Tech team escalations</li>
                <li>Flagged_Ops - Operations team escalations</li>
                <li>Flagged_Finance - Finance team escalations</li>
                <li>Flagged_Other - Other team escalations</li>
                <li>Flagged_Labels - RTO shipping labels</li>
            </ul>

            <h4>Resolution Tags</h4>
            <ul>
                <li>resolved - When issue is fully resolved</li>
            </ul>

            <h3>Tonality Guidelines</h3>
            <h4>Chat Support</h4>
            <ul>
                <li>Chat-like conversations</li>
                <li>Sound light, friendly, pro-active, helpful</li>
                <li>Put yourself in user's shoes</li>
                <li>Be professional, warm, friendly</li>
                <li>Keep responses clear and concise</li>
            </ul>

            <h4>Email Support</h4>
            <ul>
                <li>Detailed responses</li>
                <li>Sound light but detail-oriented</li>
                <li>Responsible and pro-active</li>
            </ul>

            <h3>Important Metrics</h3>
            <ul>
                <li><strong>FRT (First Response Time):</strong> Respond immediately with greeting</li>
                <li><strong>AHT (Average Handling Time):</strong> Prioritize efficiently</li>
                <li><strong>CSAT (Customer Satisfaction):</strong> Post-chat survey rating</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
                <li>Tag customer messages on time</li>
                <li>Use available macros and shortcuts</li>
                <li>Personalize macro responses</li>
                <li>Maintain friendly, natural tone</li>
                <li>Close conversations when done</li>
                <li>Monitor Kustomer Searches regularly</li>
                <li>Avoid formal greetings like "Good Morning, Sir/Ma'am"</li>
            </ul>

            <h3>C&O Pro Documentation</h3>
            <h4>Core Capabilities</h4>
            <ul>
                <li>Ovulation confirmation with 90% accuracy</li>
                <li>Anovulation cycle detection</li>
                <li>More accurate ovulation window prediction</li>
                <li>Better period prediction</li>
                <li>Enhanced period logging</li>
                <li>Cycle Flags™ for hidden fertility clues</li>
            </ul>

            <h4>Cycle Flags</h4>
            <ul>
                <li><strong>Fall to Baseline:</strong> Early progesterone activity</li>
                <li><strong>False Start:</strong> Temporary progesterone surge</li>
                <li><strong>Fall After Ovulation:</strong> Early progesterone decline</li>
                <li><strong>Short Luteal Phase:</strong> <9 days luteal phase</li>
                <li><strong>Early Ovulation:</strong> Before cycle's 35%</li>
                <li><strong>Late Ovulation:</strong> After cycle's 67%</li>
                <li><strong>Slow Rise:</strong> Gradual temperature increase</li>
                <li><strong>Possible Anovulation:</strong> No ovulation detected</li>
            </ul>

            <h4>Regional Availability</h4>
            <ul>
                <li>United States</li>
                <li>United Kingdom</li>
                <li>European Union</li>
                <li>Australia</li>
                <li>Canada</li>
                <li>Norway, Iceland, Isle of Man, etc.</li>
            </ul>

            <h3>DOA Steps</h3>
            <h4>Flowchart Process</h4>
            <ol>
                <li>Charger Test - Verify LED behavior</li>
                <li>Tap Reset Flow - Manual reset procedure</li>
                <li>New Ring Setup - Complete reset</li>
                <li>Ring Replacement - Final escalation</li>
            </ol>

            <h4>Bot Flow Template</h4>
            <ul>
                <li>Entry: "DOA Issue" selection</li>
                <li>Step 1: Charger Test (conditional logic)</li>
                <li>Step 2: Tap Reset Flow</li>
                <li>Step 3: Set Up New Ring</li>
                <li>Step 4: Escalate to Replacement</li>
            </ul>
        `
    }
};

// Function to load content for a section
function loadContent(sectionId) {
    const contentElement = document.getElementById(sectionId + '-content');
    if (contentElement && contentData[sectionId]) {
        contentElement.innerHTML = contentData[sectionId].content;
    }
}

// Load all content on page load
document.addEventListener('DOMContentLoaded', function() {
    Object.keys(contentData).forEach(sectionId => {
        loadContent(sectionId);
    });
    console.log('Content loaded successfully');
});


