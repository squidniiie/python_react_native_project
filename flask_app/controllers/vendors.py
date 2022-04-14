from flask_app import app
from flask import get_flashed_messages, jsonify, request, session, flash
from flask_app.models.vendor import Vendor

# CREATE ROUTE------------------------------------
@app.route('/create/vendor', methods=['POST'])
def create_vendor():
    print('Creating a vendor...')
    vendor_data = request.get_json()
    if not Vendor.validate_vendor(vendor_data):
        messages = get_flashed_messages(with_categories='true')
        errs = {}
        for category,description in messages:
            errs[category] = description
        return jsonify(message = 'There was an error', errs = errs)
    print(vendor_data)
    vendor = Vendor.save(vendor_data)
    session['id'] = vendor
    return jsonify(vendor = vendor)
# READ ROUTE--------------------------------------
@app.route('/vendors/<int:id>' , methods=['GET'])
def show_vendor(id):
    vendor = Vendor.get_one_vendor(id=id)
    return jsonify(vendor=vendor.__dict__)


@app.route('/api')
def hello_world():
    list = {'vendors': [
        {'id': '1', 'name': 'Johnny', 'description': 'Great with vintage boards','location': "Venice Beach", 'imageUrl': 'https://wellgroomedgentleman.com/media/images/Old_Man_with_Long_Beard_and_Hair.width-800.jpg'},
        {'id': '2', 'name': 'Chuck', 'description': 'Shaper from Santa Cruz','location': "Manhattan Beach",'imageUrl': 'https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Library-Sites-SmithSharedLibrary/default/dwd2f275ef/images/Athletes/YADIN_NICOL_500X500.jpg' },
        {'id': '3', 'name': 'Kelly', 'description': 'Quick turnaround time',  'location': "Santa Monica",'imageUrl': 'https://i.pinimg.com/originals/fb/c2/9e/fbc29e11f43bb0a19c5bbc2d141fb840.jpg'
        },
    ]}
    print('hellooooo!!!')
    return list
# UPDATE ROUTE------------------------------------
@app.route('/update/vendor/<int:id>', methods=['PUT'])
def update_vendor(id):
    vendor_data = {
        **request.get_json(),
        'id' : id
    }
    vendor = Vendor.edit_vendor(vendor_data)
    print('Edited Vendor: ', vendor)
    return jsonify(id=id)
# DELETE ROUTE------------------------------------
@app.route('/delete/vendor/<int:id>', methods=['DELETE'])
def delete_vendor(id):
    vendor_data = {
        'id' : id
    }
    deleted_vendor = Vendor.delete_vendor(vendor_data)
    print('Deleted Vendor: ', deleted_vendor)
    return jsonify(id=id)