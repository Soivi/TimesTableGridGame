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

testOption()

driver.close()
