# Avocado millennials 
Us Millennials LOVE avocados! So we decided to analyze some avocado trends in the U.S. 

# Data information 
The data was compiled into a csv file from kaggle https://www.kaggle.com/neuromusic/avocado-prices which was downloaded from the Hass avocado board website https://hassavocadoboard.com/happenings/. 
#      METHODS
# _______________________
1. Cleaned the data using pandas in jupyter notebook.
2. Used PostgresSQL as our database.
3. Used FlaskSQLAlchemy to build an API. 
4. Used JavaScript, HTML, and CSS in order to create are visualizations.

#  VIZUALIZATIONS 
# -----------------
 # D3. Scatterplot:
 The D3.Scatter plot allows you to transition between Small/Medium Hass Avocados, and Large Hass Avocados sold on the X axis and displays the Average Prices for these avocados on the y axis. Each circle on the scatter plot displays the location where the avocados where sold and how many. Using the scatterplot we can see which regions are more/less expensive and see a relationship between price and amount of avocados sold. 
 
 # Chart 
 The Bar Chart displays the number of avocados sold in the years of 2015, 2016,2017, and 2018. Each colored bar represents the size of an avocado. Using this vizualization we can see the relationships between the the amount of avocados sold v.s the size of the avocado. 
 
 # JSChart
 


# Project File Structure
index.html
assets/data -- All data should go here, .csv files, database files
assets/js -- All javascript files should go here
assets/css -- All css files should go here
flask/ -- Flask app and index.html should go here
