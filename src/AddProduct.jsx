function AddProduct() {
    return (
        <div class="row mt-3">
            <div class="col-6 offset-3">
                <h3 class="text-center">Create a New product</h3>
                <form method="POST" action="/" novalidate class="needs-validation" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="title" class="form-label">Name:</label>
                        <input type="text" id="title" name="name" placeholder="Enter product name"
                            class="form-control" required />
                        <div class="invalid-feedback">Plese enter the Name of the Product</div>
                    </div>

                    <div class="mb-3">
                        <label for="price" class="form-label">Price:</label>
                        <input type="number" id="price" name="price" placeholder="Enter the price"
                            class="form-control" required />
                        <div class="invalid-feedback">Price should be valid</div>
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Rating:</label>
                        <input id="description" type="number" name="rating" class="form-control" placeholder="Enter rating" required></input>
                        <div class="invalid-feedback">Plese enter the rating</div>
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Upload your product image:</label>
                        <input type="file" id="image" name="image" placeholder="Enter the image link/url"
                            class="form-control" required />
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Enter the company name:</label>
                        <input type="text" id="image" name="company" placeholder="Enter the name of the company"
                            class="form-control" required />
                    </div>

                
                    <button type="submit" class="btn btn-outline-primary">Add</button><br /><br />
                </form>
            </div>
        </div>
    );
}

export default AddProduct;