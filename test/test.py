from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("http://soivi.github.io/TimesTableGridGame")	

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

testOption()
testPractice()
testEasy()

driver.close()
