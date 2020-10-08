from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base

app = Flask(__name__, template_folder="templates")
app.config.from_pyfile('config.py')
db = SQLAlchemy()
db.init_app(app)
db.Model = automap_base(db.Model)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/avocado_prices')
def avocado():
    db.Model.prepare(db.engine, reflect=True)
    print(db.Model.classes.keys()) 
    avocado_prices = db.Model.classes.avocado_prices
    DataQuery = avocado_prices.query.all()
    DataListDict = [{"Date": q.avodate, "Average_price": q.averageprice,  "Total_volume": q.total_volume,
     "PLU4046": q.avo4046, "PLU4225": q.avo4225, "PLU4770": q.avo4770, 
     "Total_bags": q.total_bags, "Small_bags": q.small_bags, "Larg_bags": q.largebags,
      "XLarge_Bags": q.xlarge_bags, "Type": q.type, "Year": q.year,
       "Region": q.region} for q in DataQuery]
       
    return jsonify(DataListDict)

#Alison route for viz - groupby region app
# @app.route('/groupedRegions')
# def regions():
#     db.Model.prepare(db.engine, reflect=True)
#     print(db.Model.classes.keys())
#     Avocadoregions = db.Model.classes.avocado_prices
#     DataQuery = db.Model.query(Avocadoregions).groupby(region)
#     DataListDict = [{"Date": q.avodate, "Average_price": q.averageprice,"Total_volume": q.total_volume,
#      "4046": q.avo4046, "4225": q.avo4225, "4770": q.avo4770,
#      "Total_bags": q.total_bags, "Small_bags": q.small_bags, "Larg_bags": q.largebags,
#       "XLarge_Bags": q.xlarge_bags, "Type": q.type, "Year": q.year,
#        "Region": q.region} for q in DataQuery]
#     return jsonify(DataListDict)
   
   
if __name__ == '__main__':
    app.run(debug=True)
