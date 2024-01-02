import { bikeModel } from "./model.js"

export const getBikes = () => bikeModel.find()

export const getBikeById = id => bikeModel.findById(id)

export const createBike = bike => new bikeModel(bike).save()

export const updateBike = (id, update) => bikeModel.findByIdAndUpdate(id, update, {runValidators: true})

export const deleteBikeById = (id) => bikeModel.findOneAndDelete({ _id: id })

// export const updateBikeById = (id, values) => bikeModel.findByIdAndUpdate(id, values)

export const countBikes = () => bikeModel.countDocuments()
export const countAvailableBikes = () => bikeModel.countDocuments({status : "available"})
export const countBusyBikes = () => bikeModel.countDocuments({status: "busy"})

export const calculateAverage = async field => {
    const avgResult = await bikeModel.aggregate([{
        $group: {
            _id: null,
            avg: {$avg: `$${field}`}
        }
    }])
    return avgResult[0]?.avg
}
