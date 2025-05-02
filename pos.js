const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB', {
    day: '2-digit', month: '2-digit', year: 'numeric'
});
document.getElementById('todayDate').innerText = formattedDate;

$("#customer-content").css("display", "none");
$("#item-content").css("display", "none");
$("#order-content").css("display", "none");
$("#order-history-content").css("display", "none");
$("#invoice-content").css("display", "none");

$("#nav-home").on('click', function () {
    $("#dashboard-content").css("display", "block");
    $("#customer-content").css("display", "none");
    $("#item-content").css("display", "none");
    $("#order-content").css("display", "none");
    $("#order-history-content").css("display", "none");
    $("#invoice-content").css("display", "none");
})
$("#nav-customer").on('click', function () {
    $("#dashboard-content").css("display", "none");
    $("#customer-content").css("display", "block");
    $("#item-content").css("display", "none");
    $("#order-content").css("display", "none");
    $("#order-history-content").css("display", "none");
    $("#invoice-content").css("display", "none");
})
$("#nav-item").on('click', function () {
    $("#dashboard-content").css("display", "none");
    $("#customer-content").css("display", "none");
    $("#item-content").css("display", "block");
    $("#order-content").css("display", "none");
    $("#order-history-content").css("display", "none");
    $("#invoice-content").css("display", "none");
})
$("#nav-order").on('click', function () {
    $("#dashboard-content").css("display", "none");
    $("#customer-content").css("display", "none");
    $("#item-content").css("display", "none");
    $("#order-content").css("display", "block");
    $("#order-history-content").css("display", "none");
    $("#invoice-content").css("display", "none");
})
$("#order-history-btn").on('click', function () {
    $("#dashboard-content").css("display", "none");
    $("#customer-content").css("display", "none");
    $("#item-content").css("display", "none");
    $("#order-content").css("display", "none");
    $("#order-history-content").css("display", "block");
    $("#invoice-content").css("display", "none");
})
$("#invoice-btn").on('click', function () {
    $("#dashboard-content").css("display", "none");
    $("#customer-content").css("display", "none");
    $("#item-content").css("display", "none");
    $("#order-content").css("display", "none");
    $("#order-history-content").css("display", "none");
    $("#invoice-content").css("display", "block");
})

/*--------------------------------CUSTOMER---------------------------------------*/

let customers_db = [];

function loadCustomers() {
    $('#customer-tbody').empty();

    customers_db.map((item , index) => {
        let name = item.name;
        let address = item.address;
        let nic = item.nic;
        let number = item.mobile;
        let email = item.email;

        let data = `<tr>
        <td>${1}</td>
        <td>${name}</td>
        <td>${address}</td>
        <td>${nic}</td>
        <td>${number}</td>
        <td>${email}</td>
        </tr>`
        $('#customer-tbody').append(data);
    })
}

$('#customer-save').on('click', function () {
    let name = $('#name').val();
    let address = $('#address').val();
    let nic = $('#nic').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();

    if (name === '' || address === '' || nic === '' || mobile === '' || email === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid inputs',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }else{
        let customer_data = {
            name: name,
            address: address,
            nic: nic,
            mobile: mobile,
            email: email,

        };

        customers_db.push(customer_data);

        console.log(customers_db);
        loadCustomers();

        Swal.fire({
            title: 'Added successfully!',
            icon: 'success',
            draggable: true
        });
    }
});

/*--------------------------------ITEM---------------------------------------*/

let item_db = [];

function loadItems() {
    $('#item-tbody').empty();

    item_db.map((item , index) => {
        let itemName = item.item-name;
        let price = item.price;
        let qty = item.qty;
        let desc = item.desc;

        let data = `<tr>
        <td>${1}</td>
        <td>${itemName}</td>
        <td>${price}</td>
        <td>${qty}</td>
        <td>${desc}</td>
        </tr>`
        $('#item-tbody').append(data);
    })
}

$('#item-save').on('click', function () {
    let name = $('#item-name').val();
    let price = $('#price').val();
    let qty = $('#qty').val();
    let desc = $('#desc').val();

    if (name === '' || price === '' || qty === '' || desc === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid inputs',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }else{
        let item_data = {
            name: name,
            price: price,
            qty: qty,
            desc: desc
        };

        item_db.push(item_data);

        console.log(item_db);
        loadItems();

        Swal.fire({
            title: 'Added successfully!',
            icon: 'success',
            draggable: true
        });
    }
});