from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import os

driver = webdriver.Chrome()
#driver.get("http://soivi.github.io/TimesTableGridGame")
driver.get("file://" + os.getcwd() + "/../index.html") # Get local files

delayValue = 0.05

def testOption():
	# Go to option page
	driver.find_element_by_id("optionId").click()
	vibrationOffButton = driver.find_element_by_id("vibrationOff")
	vibrationOnButton = driver.find_element_by_id("vibrationOn")

	# Check is button disabled or off
	assert(vibrationOffButton.is_enabled() == True)
	assert(vibrationOnButton.is_enabled() == False)

	# Turn vibration off and check button status
	vibrationOffButton.click()
	time.sleep(0.2) # Wait javascript to run
	assert(vibrationOffButton.is_enabled() == False)
	assert(vibrationOnButton.is_enabled() == True)

	# Turn vibration on and check button status
	vibrationOnButton.click()
	time.sleep(0.2) # Wait javascript to run
	assert(vibrationOffButton.is_enabled() == True)
	assert(vibrationOnButton.is_enabled() == False)
	# Go back to start page	
	driver.back()
	print("Option site tested")

def testPractice():
	driver.find_element_by_id("playId").click()
	driver.find_element_by_id("block0Button").click()
	driver.find_element_by_id("practiceButton").click()

	correctAnswers = driver.execute_script("return correctAnswers")
	answersToWin = driver.execute_script("return answersToWin")
	while True:
		wantedNumber = driver.execute_script("return wantedNumber")
		driver.find_element_by_name(wantedNumber).click()
		time.sleep(0.2) # Wait javascript to run
		if correctAnswers == answersToWin - 1:
			break
		correctAnswers = driver.execute_script("return correctAnswers")
	driver.switch_to.alert.accept()
	driver.back()
	driver.back()
	print("Practice level tested")

def testEasy():
	driver.find_element_by_id("playId").click()
	driver.find_element_by_id("block0Button").click()
	assert(driver.find_element_by_id("mediumButton").is_enabled() == False)
	driver.find_element_by_id("easyButton").click()

	correctAnswers = driver.execute_script("return correctAnswers")
	answersToWin = driver.execute_script("return answersToWin")
	while True:
		wantedNumber = driver.execute_script("return wantedNumber")
		driver.find_element_by_name(wantedNumber).click()
		time.sleep(0.2) # Wait javascript to run
		if correctAnswers == answersToWin - 1:
			break
		correctAnswers = driver.execute_script("return correctAnswers")	
	driver.switch_to.alert.accept()
	driver.switch_to.alert.accept()
	time.sleep(0.2)
	assert(driver.find_element_by_id("mediumButton").is_enabled() == True)
	driver.back()
	driver.back()
	time.sleep(0.2)
	print("Easy level tested")

def testBlock1(maxLevels):
	print("Start test Block 1")
	driver.find_element_by_id("playId").click()
	driver.find_element_by_id("block1Button").click()
	for currentLevel in range(1, maxLevels + 1):
		playLevel(currentLevel, 10, False)
		playLevel(currentLevel, 10, True)
	driver.back()
	driver.back()
	time.sleep(0.2)
	print("End test block 1")

def playLevel(currentLevel, maxLevels, openNewLevel):
	testDisabledLevels(currentLevel, maxLevels)
	driver.find_element_by_id("Button" + str(currentLevel)).click()
	correctAnswers = driver.execute_script("return correctAnswers")
	answersToWin = driver.execute_script("return answersToWin")
	wantedNumber = driver.execute_script("return wantedNumber")
	if not openNewLevel:
		for i in range(0, int(120 / 5)):
			if int(driver.find_element_by_name(wantedNumber).get_attribute("id")) == 0:
				driver.find_element_by_id(1).click()
			else:
				driver.find_element_by_id(0).click()
		
	for i in range(0, int(120 / 20 * 3)):
		if int(driver.find_element_by_name(wantedNumber).get_attribute("id")) == 0:
			driver.find_element_by_id(1).click()
		else:
			driver.find_element_by_id(0).click()

	while True:
		wantedNumber = driver.execute_script("return wantedNumber")
		driver.find_element_by_name(wantedNumber).click()
		time.sleep(delayValue) # Wait javascript to run
		if correctAnswers == answersToWin - 1:
			break
		correctAnswers = driver.execute_script("return correctAnswers")
	driver.switch_to.alert.accept()
	if openNewLevel: # Also opened block 2
		driver.switch_to.alert.accept()
	time.sleep(delayValue)
	print("- " + str(currentLevel) + " is tested " + "opened new level " + str(openNewLevel))
	

def testDisabledLevels(currentLevel, maxLevels):
	time.sleep(delayValue)
	for i in range(1, maxLevels + 1):
		if i <= currentLevel:
			assert(driver.find_element_by_id("Button" + str(i)).is_enabled() == True)
		else:
			assert(driver.find_element_by_id("Button" + str(i)).is_enabled() == False)


def testHighScore(block, maxLevels, isPlayed):
	driver.find_element_by_id("highscoreId").click()
	driver.find_element_by_id("block" + str(block) + "Button").click()
	for level in range(1, maxLevels + 1):
		if isPlayed:
			assert(driver.find_element_by_id("level" + str(level) + "Time").text != "No record")
		else:
			assert(driver.find_element_by_id("level" + str(level) + "Time").text == "No record")
	
	if block == 1:
		if isPlayed:
			assert(driver.find_element_by_id("totalTime").text != "No record")
		else:
			assert(driver.find_element_by_id("totalTime").text == "No record")
		
	driver.back()
	driver.back()
	time.sleep(delayValue)
	print("Block " + str(block) + " highscore tested")

def main():
	testOption()
	testPractice()
	testEasy()
	maxLevels = 10
	block = 1
	testHighScore(block, maxLevels, False)
	testBlock1(maxLevels)
	testHighScore(block, maxLevels, True)

main()
driver.close()
